"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Animated, PanResponder, ViewPropTypes } from "react-native";
import Defaults from "./Defaults";
import clamp from "clamp";
import { styles } from "./Styles";

//Components could be unloaded and loaded and we will loose the users currentIndex, we can persist it here.
let currentIndex = {};
let guid = 0;

const actionShape = PropTypes.shape({
  show: PropTypes.bool,
  view: PropTypes.element, // takes priority over text + color
  containerStyle: ViewPropTypes.style,
  textStyle: ViewPropTypes.style,
  text: PropTypes.string,
  color: PropTypes.string,
  onAction: PropTypes.func, // triggered on action, given card data, must return true if success
});

const defaultActionsProp = {
  yup: { show: true, text: "Yup!", color: "green" },
  nope: { show: true, text: "Nope!", color: "red" },
  maybe: { show: true, text: "Maybe!", color: "orange" },
};

const mergeActionProps = (actionsProps) => ({
  yup: { ...defaultActionsProp.yup, ...actionsProps.yup },
  nope: { ...defaultActionsProp.nope, ...actionsProps.nope },
  maybe: { ...defaultActionsProp.maybe, ...actionsProps.maybe },
});

export default class SwipeCards extends Component {
  constructor(props) {
    super(props);

    //Use a persistent variable to track currentIndex instead of a local one.
    this.guid = this.props.guid || guid++;
    if (!currentIndex[this.guid]) currentIndex[this.guid] = 0;

    this.state = {
      pan: new Animated.ValueXY(0),
      panResetAnime: null,
      enter: new Animated.Value(0.5),
      cards: [].concat(this.props.cards),
      card: this.props.cards[currentIndex[this.guid]],
    };

    this.lastX = 0;
    this.lastY = 0;
    this.mergedActionsProps = mergeActionProps(this.props.actions);

    this.cardAnimation = null;

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        if (Math.abs(gestureState.dx) > 3 || Math.abs(gestureState.dy) > 3) {
          if (this.props.onDragStart) this.props.onDragStart();
          return true;
        }
        return false;
      },

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value,
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderTerminationRequest: (evt, gestureState) =>
        this.props.allowGestureTermination,

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.pan.x,
            dy: this.props.dragY ? this.state.pan.y : new Animated.Value(0),
          },
        ],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: async (e, { vx, vy, dx, dy }) => {
        if (this.props.onDragRelease) this.props.onDragRelease();
        this.state.pan.flattenOffset();
        let velocity;
        if (Math.abs(dx) <= 5 && Math.abs(dy) <= 5) {
          //meaning the gesture did not cover any distance
          if (this.props.onClickHandler)
            this.props.onClickHandler(this.state.card);
        }

        if (vx > 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        } else {
          velocity = dx < 0 ? -3 : 3;
        }

        const hasSwipedHorizontally =
          Math.abs(this.state.pan.x._value) > this.props.swipeThreshold;
        const hasSwipedVertically =
          Math.abs(this.state.pan.y._value) > this.props.swipeThreshold;
        if (
          hasSwipedHorizontally ||
          (hasSwipedVertically && this.props.hasMaybeAction)
        ) {
          const hasMovedRight =
            hasSwipedHorizontally && this.state.pan.x._value > 0;
          const hasMovedLeft =
            hasSwipedHorizontally && this.state.pan.x._value < 0;
          const hasMovedUp = hasSwipedVertically && this.state.pan.y._value < 0;

          let cancelled = false;
          if (hasMovedRight && this.mergedActionsProps.yup.onAction) {
            cancelled = !(await this.mergedActionsProps.yup.onAction(
              this.state.card
            ));
          } else if (hasMovedLeft && this.mergedActionsProps.nope.onAction) {
            cancelled = !(await this.mergedActionsProps.nope.onAction(
              this.state.card
            ));
          } else if (
            hasMovedUp &&
            this.props.hasMaybeAction &&
            this.mergedActionsProps.maybe.onAction
          ) {
            cancelled = !(await this.mergedActionsProps.maybe.onAction(
              this.state.card
            ));
          }

          //Yup or nope was cancelled, return the card to normal.
          if (cancelled) {
            this._resetPan();
            return;
          }

          if (this.props.cardRemoved)
            this.props.cardRemoved(currentIndex[this.guid]);

          if (this.props.smoothTransition) {
            this._advanceState();
          } else {
            this.cardAnimation = Animated.decay(this.state.pan, {
              velocity: { x: velocity, y: vy },
              deceleration: 0.98,
              useNativeDriver: true,
            });
            this.cardAnimation.start((status) => {
              if (status.finished) this._advanceState();
              else this._resetState();

              this.cardAnimation = null;
            });
          }
        } else {
          this._resetPan();
        }
      },
    });
  }

  _forceLeftSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: -500, y: 0 },
      useNativeDriver: true,
    }).start((status) => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    });
    if (this.props.cardRemoved) this.props.cardRemoved(currentIndex[this.guid]);
  }

  _forceUpSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: 0, y: -500 },
      useNativeDriver: true,
    }).start((status) => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    });
    if (this.props.cardRemoved) this.props.cardRemoved(currentIndex[this.guid]);
  }

  _forceRightSwipe() {
    this.cardAnimation = Animated.timing(this.state.pan, {
      toValue: { x: 500, y: 0 },
      useNativeDriver: true,
    }).start((status) => {
      if (status.finished) this._advanceState();
      else this._resetState();

      this.cardAnimation = null;
    });
    if (this.props.cardRemoved) this.props.cardRemoved(currentIndex[this.guid]);
  }

  swipeMaybe = () => this._forceUpSwipe();
  swipeYup = () => this._forceRightSwipe();
  swipeNope = () => this._forceLeftSwipe();

  _goToNextCard() {
    currentIndex[this.guid]++;

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    if (
      currentIndex[this.guid] > this.state.cards.length - 1 &&
      this.props.loop
    ) {
      if (this.props.onLoop) this.props.onLoop();
      currentIndex[this.guid] = 0;
    }

    this.setState({
      card: this.state.cards[currentIndex[this.guid]],
    });
  }

  _goToPrevCard() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();

    currentIndex[this.guid]--;

    if (currentIndex[this.guid] < 0) {
      currentIndex[this.guid] = 0;
    }

    this.setState({
      card: this.state.cards[currentIndex[this.guid]],
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(this.state.enter, {
      toValue: 1,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cards !== this.props.cards) {
      if (this.cardAnimation) {
        this.cardAnimation.stop();
        this.cardAnimation = null;
      }

      currentIndex[this.guid] = 0;
      this.setState({
        cards: [].concat(this.props.cards),
        card: this.props.cards[0],
      });
      this._resetState();
    }

    if (prevProps.actions !== this.props.actions) {
      this.mergedActionsProps = mergeActionProps(this.props.actions);
    }
  }

  _resetPan() {
    if (this.state.panResetAnime) this.state.panResetAnime.reset();
    const anime = Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      friction: 4,
      useNativeDriver: true,
    });
    this.state.panResetAnime = anime;
    anime.start();
  }

  _resetState() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();
  }

  _advanceState() {
    this.state.pan.setValue({ x: 0, y: 0 });
    this.state.enter.setValue(0);
    this._animateEntrance();
    this._goToNextCard();
  }

  /**
   * Returns current card object
   */
  getCurrentCard() {
    return this.state.cards[currentIndex[this.guid]];
  }

  renderNoMoreCards() {
    return this.props.renderNoMoreCards() || <Defaults.NoMoreCards />;
  }

  /**
   * Renders the cards as a stack with props.stackDepth cards deep.
   */
  renderStack() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    //Get the next stack of cards to render.
    let cards = this.state.cards
      .slice(
        currentIndex[this.guid],
        currentIndex[this.guid] + this.props.stackDepth
      )
      .reverse();

    return cards.map((card, i) => {
      let offsetX =
        this.props.stackOffsetX * cards.length - i * this.props.stackOffsetX;
      let lastOffsetX = offsetX + this.props.stackOffsetX;

      let offsetY =
        this.props.stackOffsetY * cards.length - i * this.props.stackOffsetY;
      let lastOffsetY = offsetY + this.props.stackOffsetY;

      let opacity = 0.25 + (0.75 / cards.length) * (i + 1);
      let lastOpacity = 0.25 + (0.75 / cards.length) * i;

      let scale = 0.85 + (0.15 / cards.length) * (i + 1);
      let lastScale = 0.85 + (0.15 / cards.length) * i;

      let style = [
        {
          position: "absolute",
          opacity: this.props.smoothTransition
            ? 1
            : this.state.enter.interpolate({
                inputRange: [0, 1],
                outputRange: [lastOpacity, opacity],
              }),
          elevation: i * 10,
        },
        {
          transform: [
            {
              translateY: this.state.enter.interpolate({
                inputRange: [0, 1],
                outputRange: [lastOffsetY, offsetY],
              }),
            },
            {
              translateX: this.state.enter.interpolate({
                inputRange: [0, 1],
                outputRange: [lastOffsetX, offsetX],
              }),
            },
            {
              scale: this.state.enter.interpolate({
                inputRange: [0, 1],
                outputRange: [lastScale, scale],
              }),
            },
          ],
        },
      ];

      //Is this the top card?  If so animate it and hook up the pan handlers.
      if (i + 1 === cards.length) {
        let { pan } = this.state;
        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: ["-30deg", "0deg", "30deg"],
        });
        let opacity = this.props.smoothTransition
          ? 1
          : pan.x.interpolate({
              inputRange: [-200, 0, 200],
              outputRange: [0.5, 1, 0.5],
            });

        let animatedCardStyles = {
          //...style,
          elevation: i * 10,
          transform: [
            { translateX: translateX },
            { translateY: translateY },
            { rotate: rotate },
            {
              scale: this.state.enter.interpolate({
                inputRange: [0, 1],
                outputRange: [lastScale, scale],
              }),
            },
          ],
        };

        return (
          <Animated.View
            key={
              this.props.keyExtractor
                ? this.props.keyExtractor(card)
                : String(i)
            }
            style={[styles.card, animatedCardStyles]}
            {...this._panResponder.panHandlers}
          >
            {this.props.renderCard(this.state.card)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={
            this.props.keyExtractor ? this.props.keyExtractor(card) : String(i)
          }
          style={style}
        >
          {this.props.renderCard(card)}
        </Animated.View>
      );
    });
  }

  renderCard() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    let { pan, enter } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];

    let rotate = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-30deg", "0deg", "30deg"],
    });
    let opacity = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: [0.5, 1, 0.5],
    });

    let scale = enter;

    let animatedCardStyles = {
      transform: [{ translateX }, { translateY }, { rotate }, { scale }],
      opacity,
    };

    return (
      <Animated.View
        key={
          this.props.keyExtractor
            ? this.props.keyExtractor(this.state.card)
            : undefined
        }
        style={[styles.card, animatedCardStyles]}
        {...this._panResponder.panHandlers}
      >
        {this.props.renderCard(this.state.card)}
      </Animated.View>
    );
  }

  renderAction(opacity, scale, props) {
    let animatedStyles = {
      transform: [{ scale: scale }],
      opacity: opacity,
    };

    return (
      <Animated.View
        style={[
          styles.action,
          { borderColor: props.color },
          animatedStyles,
          props.containerStyle,
        ]}
      >
        {props.view ? (
          props.view
        ) : (
          <Defaults.ActionView
            text={props.text}
            color={props.color}
            style={props.textStyle}
          />
        )}
      </Animated.View>
    );
  }

  renderNope() {
    let { pan } = this.state;
    let nopeOpacity = pan.x.interpolate({
      inputRange: [
        -this.props.swipeThreshold,
        -(this.props.swipeThreshold / 2),
      ],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    let nopeScale = pan.x.interpolate({
      inputRange: [-this.props.swipeThreshold, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return this.renderAction(
      nopeOpacity,
      nopeScale,
      this.mergedActionsProps.nope
    );
  }

  renderMaybe() {
    let { pan } = this.state;
    let maybeOpacity = pan.y.interpolate({
      inputRange: [
        -this.props.swipeThreshold,
        -(this.props.swipeThreshold / 2),
      ],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    let maybeScale = pan.x.interpolate({
      inputRange: [-this.props.swipeThreshold, 0, this.props.swipeThreshold],
      outputRange: [0, 1, 0],
      extrapolate: "clamp",
    });

    return this.renderAction(
      maybeOpacity,
      maybeScale,
      this.mergedActionsProps.maybe
    );
  }

  renderYup() {
    let { pan } = this.state;
    let yupOpacity = pan.x.interpolate({
      inputRange: [this.props.swipeThreshold / 2, this.props.swipeThreshold],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    let yupScale = pan.x.interpolate({
      inputRange: [0, this.props.swipeThreshold],
      outputRange: [0.5, 1],
      extrapolate: "clamp",
    });

    return this.renderAction(yupOpacity, yupScale, this.mergedActionsProps.yup);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.stack ? this.renderStack() : this.renderCard()}
        {this.mergedActionsProps.nope.show && this.renderNope()}
        {this.props.hasMaybeAction &&
          this.mergedActionsProps.maybe.show &&
          this.renderMaybe()}
        {this.mergedActionsProps.yup.show && this.renderYup()}
      </View>
    );
  }
}

SwipeCards.propTypes = {
  cards: PropTypes.array.isRequired,
  hasMaybeAction: PropTypes.bool,
  loop: PropTypes.bool,
  onLoop: PropTypes.func,
  allowGestureTermination: PropTypes.bool,
  stack: PropTypes.bool,
  stackGuid: PropTypes.string,
  stackDepth: PropTypes.number,
  stackOffsetX: PropTypes.number,
  stackOffsetY: PropTypes.number,
  renderNoMoreCards: PropTypes.func,
  actions: PropTypes.shape({
    yup: actionShape,
    nope: actionShape,
    maybe: actionShape,
  }),
  onClickHandler: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragRelease: PropTypes.func,
  cardRemoved: PropTypes.func,
  renderCard: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  dragY: PropTypes.bool,
  smoothTransition: PropTypes.bool,
  keyExtractor: PropTypes.func.isRequired,
  swipeThreshold: PropTypes.number,
};

SwipeCards.defaultProps = {
  cards: [],
  hasMaybeAction: false,
  loop: false,
  allowGestureTermination: true,
  stack: false,
  stackDepth: 5,
  stackOffsetX: 25,
  stackOffsetY: 0,
  actions: defaultActionsProp,
  dragY: true,
  smoothTransition: false,
  swipeThreshold: 120,
};
