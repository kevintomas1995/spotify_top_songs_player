"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_native_events_1 = __importDefault(require("react-native-events"));
var GetChildrenItemsOptions_1 = require("./GetChildrenItemsOptions");
/**
 * @ignore
 */
var SpotifyRemote = react_native_1.NativeModules.RNSpotifyRemoteAppRemote;
react_native_events_1.default.register(SpotifyRemote);
react_native_events_1.default.conform(SpotifyRemote);
// Example of Javascript only api method
SpotifyRemote.setPlaying = function (playing) {
    // todo: Will want to likely check the state of playing somewhere?
    // Perhaps this can be done in native land so that we don't need to
    // worry about it here
    return playing ? SpotifyRemote.resume() : SpotifyRemote.pause();
};
// Augment the android module to warn on unimplemented methods
if (react_native_1.Platform.OS === "android") {
    SpotifyRemote.getContentItemForUri = function (uri) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.warn("getContentItemForUri is not implemented in Spotify's Android SDK");
            return [2 /*return*/, undefined];
        });
    }); };
    SpotifyRemote.getRootContentItems = function (type) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.warn("getRootContentItems is not implemented in Spotify's Android SDK");
            return [2 /*return*/, []];
        });
    }); };
    var androidGetItemOfChildren_1 = SpotifyRemote.getChildrenOfItem;
    SpotifyRemote.getChildrenOfItem = function (item, options) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, androidGetItemOfChildren_1(item, __assign(__assign({}, GetChildrenItemsOptions_1.DEFAULT_GET_CHILDREN_OPTIONS), options))];
        });
    }); };
}
// Augment the iOS module to handle differences
if (react_native_1.Platform.OS === "ios") {
    var iosGetChildrenOfItem_1 = SpotifyRemote.getChildrenOfItem;
    SpotifyRemote.getChildrenOfItem = function (item, options) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, iosGetChildrenOfItem_1(item)];
        });
    }); };
}
/**
 * @ignore
 * The events produced by the eventEmitter implementation around
 * when new event listeners are added and removed
 */
var metaEvents = {
    newListener: 'newListener',
    removeListener: 'removeListener'
};
/**
* @ignore
* Want to ignore the metaEvents when sending our subscription events
*/
var ignoredEvents = Object.keys(metaEvents);
/**
 * @ignore
 * The following allows us to lazily subscribe to events instead of having a single
 * subscription all the time regardless which is less efficient
*/
SpotifyRemote.on(metaEvents.newListener, function (type) {
    if (ignoredEvents.indexOf(type) === -1) {
        var listenerCount = SpotifyRemote.listenerCount(type);
        // If this is the first listener, send an eventSubscribed event
        if (listenerCount == 0) {
            react_native_events_1.default.emitNativeEvent(SpotifyRemote, "eventSubscribed", type);
        }
    }
}).on(metaEvents.removeListener, function (type) {
    if (ignoredEvents.indexOf(type) === -1) {
        var listenerCount = SpotifyRemote.listenerCount(type);
        if (listenerCount == 0) {
            react_native_events_1.default.emitNativeEvent(SpotifyRemote, "eventUnsubscribed", type);
        }
    }
});
/**
 * @ignore
 */
exports.default = SpotifyRemote;
//# sourceMappingURL=SpotifyRemote.js.map