# Swipe Cards Deck for React Native

A swipping cards deck (similar to Tinder). This project is compatible with React Native 0.62+ (and probably older versions) & Expo projects (unlike others).

A [package](https://www.npmjs.com/package/react-native-swipe-cards-deck) based on [react-native-tinder-swipe-cards](https://github.com/meteor-factory/react-native-tinder-swipe-cards) (unmaintained) project - with bug fixes and performance improvement using react's native driver.

We are planning in keeping this project alive for future react version and to expand it for better compatibility, design & performance.

Issues & PRs are welcome (for PRs check PR section at the bottom)



Note: There are 2 working modes, stack & cards, currently we can only gurantee the cards part of the project but we'll try to fix common problems in both modes. Stack mode is working OK in the latest version.


![React Native Swipe Cards](https://github.com/eyalyoli/react-native-swipe-cards-deck/blob/master/screenshots/swipe-animation.gif)

\* Taken from our app swaplet.

If you liked our contribution, please try out swaplet - the free home exchange platform for [Android](https://play.google.com/store/apps/details?id=app.swaplet) and [iOS](https://apps.apple.com/us/app/swaplet-home-exchange/id1545331520). 

We would love to get your feedback!

## 🎉 Version 0.3 is HERE! 🎉
There are major/breaking changes described in the readme, but they are for the better!

+ Control over swipe sensitivity
+ Better & more stable code
+ Better props handling

We are very excited to get feedback from you...

## Quick Start
1. `npm i react-native-swipe-cards-deck`
2. Import it `import SwipeCards from "react-native-swipe-cards-deck"`
4. Render it `<SwipeCards ... />`

```javascript
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";

function Card({ data }) {
  return (
    <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
      <Text>{data.text}</Text>
    </View>
  );
}

function StatusCard({ text }) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}

export default function App() {
  const [cards, setCards] = useState();

  // replace with real remote data fetching
  useEffect(() => {
    setTimeout(() => {
      setCards([
        { text: "Tomato", backgroundColor: "red" },
        { text: "Aubergine", backgroundColor: "purple" },
        { text: "Courgette", backgroundColor: "green" },
        { text: "Blueberry", backgroundColor: "blue" },
        { text: "Umm...", backgroundColor: "cyan" },
        { text: "orange", backgroundColor: "orange" },
      ]);
    }, 3000);
  }, []);

  function handleYup(card) {
    console.log(`Yup for ${card.text}`);
    return true; // return false if you wish to cancel the action
  }
  function handleNope(card) {
    console.log(`Nope for ${card.text}`);
    return true;
  }
  function handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
    return true;
  }

  return (
    <View style={styles.container}>
      {cards ? (
        <SwipeCards
          cards={cards}
          renderCard={(cardData) => <Card data={cardData} />}
          keyExtractor={(cardData) => String(cardData.text)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          actions={{
            nope: { onAction: handleNope },
            yup: { onAction: handleYup },
            maybe: { onAction: handleMaybe },
          }}
          hasMaybeAction={true}

          // If you want a stack of cards instead of one-per-one view, activate stack mode
          // stack={true}
          // stackDepth={3}
        />
      ) : (
        <StatusCard text="Loading..." />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  cardsText: {
    fontSize: 22,
  },
});
```

### Props (> v0.3)
\* Major changes has been made to consolidate all yup/nope/maybe props to one object (`actions` props) for a cleaner code
|       Name        | Type     | Description                                                                    | Default      | v0.3 changes & notes |
|-------------------|----------|--------------------------------------------------------------------------------|--------------|----------------------|
| cards*            | Array    | Data that will be provided as props for the cards                              |              |                      |
| renderCard*       | Function | Renders the card with the current data                                         |              |                      |
| keyExtractor*     | Function | Extracts the key for given card                                                |              |                      |
| loop              | Boolean  | If true, start again when run out of cards                                     | `false`      |                      |
| onLoop            | Function | Called when card list returns to the beginning                                 |              |                      |
| renderNoMoreCards | Function | Renders what is shown after swiped last card                                   |              |                      |
| hasMaybeAction    | Boolean  | Includes the possibility to swipe up and its components                        | `false`      |                      |
| containerStyle    | style    | Override default style                                                         |              |                      |
| smoothTransition  | Boolean  | Disables a slow transition fading the current card out                         | `false`      |                      |
| cardKey           | String   | React key to be used to for each card                                          |              |                      |
| dragY             | Boolean  | Allows dragging cards vertically                                               | `true`       |                      |
| stack             | Boolean  | Enables the stack mode                                                         | `false`      |                      |
| stackDepth        | Number   | Limit number of cards showing in stack mode                                    | no limit     |                      |
| stackOffsetX      | Number   | Horizontal offset between cards in stack                                       | 25           |                      |
| stackOffsetY      | Number   | Vertical offset between cards in stack                                         | 0            |                      |
| cardRemoved       | Function | A callback passing the card reference that just got removed                    |              |                      |
| onClickHandler    | Function | A callback clicking the card                                                   | alert('tap') |                      |
| ✨ actions        | Actions  | Sets show, text, color, style, view for nope, yup, maybe actions               |              | Interface defined ⬇️ |
| ✨ swipeThreshold | Number   | Sets the sensitivity of the card swipping (until nope/yup/maybe)               | 120          | new                  |

## Deprecated props (< v0.3)
|       Name        | Type     | Description                                                                    | Default      | v0.3 changes & notes  |
|-------------------|----------|--------------------------------------------------------------------------------|--------------|-----------------------|
| ⚠️ showYup        | Boolean  | Shows the 'Yup' component                                                      | `true`       | use `actions` instead |
| ⚠️ showNope       | Boolean  | Shows the 'Nope'                                                               | `true`       | use `actions` instead |
| ⚠️ showMaybe      | Boolean  | Shows the 'Maybe'                                                              | `true`       | use `actions` instead |
| ⚠️ renderYup      | Function | Renders Yup                                                                    |              | use `actions` instead |
| ⚠️ renderNope     | Function | Renders Nope                                                                   |              | use `actions` instead |
| ⚠️ renderMaybe    | Function | Renders Maybe                                                                  |              | use `actions` instead |
| ⚠️ handleYup      | Function | Called when card is 'passed' with that card's data, returns true for success   |              | use `actions` instead |
| ⚠️ handleNope     | Function | Called when card is 'rejected' with that card's data, returns true for success |              | use `actions` instead |
| ⚠️ handleMaybe    | Function | Called when card is 'maybe' with that card's data, returns true for success    |              | use `actions` instead |
| ⚠️ yupStyle       | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ yupTextStyle   | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ nopeStyle      | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ nopeTextStyle  | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ maybeStyle     | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ maybeTextStyle | style    | Override default style                                                         |              | use `actions` instead |
| ⚠️ yupView        | element  | React component to render on a Yes vote                                        |              | use `actions` instead |
| ⚠️ yupText        | string   | Text to render on Yes vote                                                     | `Yep`        | use `actions` instead |
| ⚠️ nopeView       | element  | React component to render on a No vote                                         |              | use `actions` instead |
| ⚠️ nopeText       | string   | Text to render on No vote                                                      | `Nope`       | use `actions` instead |
| ⚠️ maybeView      | element  | React component to render on a Maybe vote                                      |              | use `actions` instead |
| ⚠️ maybeText      | string   | Text to render on Maybe vote                                                   | `Maybe`      | use `actions` instead |

### Functions
|      Name              |           Description                  |   Arguments     |    Return value    | v0.3 changes & notes |
|------------------------|----------------------------------------|-----------------|--------------------|----------------------|
| ⚠️ _forceRightSwipe    | Fires swipe right animation            |                 |                    | deprecated           |
| ⚠️ _forceLeftSwipe     | Fires swipe left animation             |                 |                    | deprecated           |
| ⚠️ _forceUpSwipe       | Fires swipe up animation               |                 |                    | deprecated           |
| ✨ swipeMaybe          | Fires swipe maybe action               |                 |                    | new                  |
| ✨ swipeYup            | Fires swipe yup action                 |                 |                    | new                  |
| ✨ swipeNope           | Fires swipe nope action                |                 |                    | new                  |

### Interfaces (> v0.3)
```javascript
interface Action {
  show: boolean, // if to show the view when the action occur, this doesn't disable the action from happening!
  text: string, // for customizing the text in text-in-a-box default view of the action
  color: string, // for customizing the color of text-in-a-box default view of the action
  containerStyle: ViewProps.style, // customing the style of the animated container (the box of text-in-a-box view)
  textStyle: TextViewProps.style, // customing the style of the text in text-in-a-box view
  view: ReactElement, // when set, uses the custom view instead of the default text-in-a-box - takes priority on text/color
  onAction: function, // a function to handle on action fired, must return true if successful or false if failed
}

interface Actions {
  yup: Action,
  nope: Action,
  maybe: Action
}

// Unifying the property for nope/yup/maybe makes it easier & cleaner to apply
// These are the default values for actions prop
actions: {
  yup: { show: true, text: "Yup!", color: "green" },
  nope: { show: true, text: "Nope!", color: "red" },
  maybe: { show: true, text: "Maybe!", color: "orange" },
}
```
example of customizing actions prop:
```javascript
const actions = {
  maybe: { show: false }, 
} // this will override the defaults value **ONLY** of maybe and will not show the text-in-a-box when triggered (but will show for yup/nope)

<SwipeCards
  cards={...}
  renderCard={...}
  keyExtractor={...}
  actions={actions}
  ...
  />
```

*required

### PRs are welcome
Just stick with the git standards and implement a good code.

Please use branch prefix (fix/feature).

Contact me if you have questions...

### Todo
- [X] Bug fixes from prev. [project](https://github.com/meteor-factory/react-native-tinder-swipe-cards/issues)
- [ ] Get ideas from [project](https://github.com/jonathanRinciari/React-Native-Swipeable-Cards)
- [X] New gif example
- [X] Manual testing to check if all prev. features work with new react native versions
- [X] Fix stack mode
- [ ] Unit testing
- [X] Fix dragY not working
- [X] Fix iOS stack
- [ ] Refactor code to be cleaner - v3.0
- [ ] Move to typescript
