"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getiOSScopeFromScopes = void 0;
/**
 * The Spotify Api Scopes as defined in
 *  > iOS: https://spotify.github.io/ios-sdk/html/Constants/SPTScope.html
 *
 * > android: https://developer.spotify.com/documentation/general/guides/scopes
 * @enum {number}
 */
var ApiScope;
(function (ApiScope) {
    /**
     * Read access to user’s private playlists.
     */
    ApiScope["PlaylistReadPrivateScope"] = "playlist-read-private";
    /**
     * Include collaborative playlists when requesting a user’s playlists.
     */
    ApiScope["PlaylistReadCollaborativeScope"] = "playlist-read-collaborative";
    /**
     * Write access to a user’s public playlists.
     */
    ApiScope["PlaylistModifyPublicScope"] = "playlist-modify-public";
    /**
     * Write access to a user’s private playlists.
     */
    ApiScope["PlaylistModifyPrivateScope"] = "playlist-modify-private";
    /**
     * Read access to the list of artists and other users that the user follows.
     */
    ApiScope["UserFollowReadScope"] = "user-follow-read";
    /**
     * Write/delete access to the list of artists and other users that the user follows.
     */
    ApiScope["UserFollowModifyScope"] = "user-follow-modify";
    /**
     * Read access to a user’s “Your Music” library.
     */
    ApiScope["UserLibraryReadScope"] = "user-library-read";
    /**
     * Write/delete access to a user’s “Your Music” library.
     */
    ApiScope["UserLibraryModifyScope"] = "user-library-modify";
    /**
     * Read access to the user’s birthdate.  (iOS)
     */
    ApiScope["UserReadBirthDateScope"] = "user-read-birth-date";
    /**
     * Read access to user’s email address.
     */
    ApiScope["UserReadEmailScope"] = "user-read-email";
    /**
     * Read access to user’s subscription details (type of user account).
     */
    ApiScope["UserReadPrivateScope"] = "user-read-private";
    /**
     * Read access to a user’s top artists and tracks.
     */
    ApiScope["UserTopReadScope"] = "user-top-read";
    /**
     * Upload user generated content images
     */
    ApiScope["UGCImageUploadScope"] = "ugc-image-upload";
    /**
     * Control playback of a Spotify track.
     */
    ApiScope["StreamingScope"] = "streaming";
    /**
     * Use App Remote to control playback in the Spotify app
     */
    ApiScope["AppRemoteControlScope"] = "app-remote-control";
    /**
     * Read access to a user’s player state.
     */
    ApiScope["UserReadPlaybackStateScope"] = "user-read-playback-state";
    /**
     * Read access to a user’s playback position. (android)
     */
    ApiScope["UserReadPlaybackPosition"] = "user-read-playback-position";
    /**
     * Write access to a user’s playback state
     */
    ApiScope["UserModifyPlaybackStateScope"] = "user-modify-playback-state";
    /**
     * Read access to a user’s currently playing track
     */
    ApiScope["UserReadCurrentlyPlayingScope"] = "user-read-currently-playing";
    /**
     * Read access to a user’s currently playing track
     */
    ApiScope["UserReadRecentlyPlayedScope"] = "user-read-recently-played";
    /**
     * Read access to a user’s currently playing track
     */
    ApiScope["UserReadCurrentlyPlaying"] = "user-read-currently-playing";
})(ApiScope || (ApiScope = {}));
// in iOS the scopes are flag structures, so this is used to convert from the web/android string style
// as defined here: https://spotify.github.io/ios-sdk/html/Constants/SPTScope.html
var ApiScopeFlagValues = (_a = {},
    _a[ApiScope.PlaylistReadPrivateScope] = 1 << 0,
    _a[ApiScope.PlaylistReadCollaborativeScope] = 1 << 1,
    _a[ApiScope.PlaylistModifyPublicScope] = 1 << 2,
    _a[ApiScope.PlaylistModifyPrivateScope] = 1 << 3,
    _a[ApiScope.UserFollowReadScope] = 1 << 4,
    _a[ApiScope.UserFollowModifyScope] = 1 << 5,
    _a[ApiScope.UserLibraryReadScope] = 1 << 6,
    _a[ApiScope.UserLibraryModifyScope] = 1 << 7,
    _a[ApiScope.UserReadBirthDateScope] = 1 << 8,
    _a[ApiScope.UserReadEmailScope] = 1 << 9,
    _a[ApiScope.UserReadPrivateScope] = 1 << 10,
    _a[ApiScope.UserTopReadScope] = 1 << 11,
    _a[ApiScope.UGCImageUploadScope] = 1 << 12,
    _a[ApiScope.StreamingScope] = 1 << 13,
    _a[ApiScope.AppRemoteControlScope] = 1 << 14,
    _a[ApiScope.UserReadPlaybackStateScope] = 1 << 15,
    _a[ApiScope.UserModifyPlaybackStateScope] = 1 << 16,
    _a[ApiScope.UserReadCurrentlyPlayingScope] = 1 << 17,
    _a[ApiScope.UserReadRecentlyPlayedScope] = 1 << 18,
    _a);
/**
 * Internal method used for converting array of ApiScopes to iOS bit flag based value
 *
 * @export
 * @param {ApiScope[]} scopes
 * @returns {number}
 */
function getiOSScopeFromScopes(scopes) {
    if (scopes === void 0) { scopes = []; }
    // For each scope in the array, map to its flag value and then 
    // OR them into a single result number 
    return scopes.map(function (scopeString) { return ApiScopeFlagValues[scopeString] || 0; })
        .reduce(function (result, current) {
        return result | current;
    }, 0);
}
exports.getiOSScopeFromScopes = getiOSScopeFromScopes;
exports.default = ApiScope;
//# sourceMappingURL=ApiScope.js.map