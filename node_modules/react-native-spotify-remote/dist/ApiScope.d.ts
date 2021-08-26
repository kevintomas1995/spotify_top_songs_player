/**
 * The Spotify Api Scopes as defined in
 *  > iOS: https://spotify.github.io/ios-sdk/html/Constants/SPTScope.html
 *
 * > android: https://developer.spotify.com/documentation/general/guides/scopes
 * @enum {number}
 */
declare enum ApiScope {
    /**
     * Read access to user’s private playlists.
     */
    PlaylistReadPrivateScope = "playlist-read-private",
    /**
     * Include collaborative playlists when requesting a user’s playlists.
     */
    PlaylistReadCollaborativeScope = "playlist-read-collaborative",
    /**
     * Write access to a user’s public playlists.
     */
    PlaylistModifyPublicScope = "playlist-modify-public",
    /**
     * Write access to a user’s private playlists.
     */
    PlaylistModifyPrivateScope = "playlist-modify-private",
    /**
     * Read access to the list of artists and other users that the user follows.
     */
    UserFollowReadScope = "user-follow-read",
    /**
     * Write/delete access to the list of artists and other users that the user follows.
     */
    UserFollowModifyScope = "user-follow-modify",
    /**
     * Read access to a user’s “Your Music” library.
     */
    UserLibraryReadScope = "user-library-read",
    /**
     * Write/delete access to a user’s “Your Music” library.
     */
    UserLibraryModifyScope = "user-library-modify",
    /**
     * Read access to the user’s birthdate.  (iOS)
     */
    UserReadBirthDateScope = "user-read-birth-date",
    /**
     * Read access to user’s email address.
     */
    UserReadEmailScope = "user-read-email",
    /**
     * Read access to user’s subscription details (type of user account).
     */
    UserReadPrivateScope = "user-read-private",
    /**
     * Read access to a user’s top artists and tracks.
     */
    UserTopReadScope = "user-top-read",
    /**
     * Upload user generated content images
     */
    UGCImageUploadScope = "ugc-image-upload",
    /**
     * Control playback of a Spotify track.
     */
    StreamingScope = "streaming",
    /**
     * Use App Remote to control playback in the Spotify app
     */
    AppRemoteControlScope = "app-remote-control",
    /**
     * Read access to a user’s player state.
     */
    UserReadPlaybackStateScope = "user-read-playback-state",
    /**
     * Read access to a user’s playback position. (android)
     */
    UserReadPlaybackPosition = "user-read-playback-position",
    /**
     * Write access to a user’s playback state
     */
    UserModifyPlaybackStateScope = "user-modify-playback-state",
    /**
     * Read access to a user’s currently playing track
     */
    UserReadCurrentlyPlayingScope = "user-read-currently-playing",
    /**
     * Read access to a user’s currently playing track
     */
    UserReadRecentlyPlayedScope = "user-read-recently-played",
    /**
     * Read access to a user’s currently playing track
     */
    UserReadCurrentlyPlaying = "user-read-currently-playing"
}
/**
 * Internal method used for converting array of ApiScopes to iOS bit flag based value
 *
 * @export
 * @param {ApiScope[]} scopes
 * @returns {number}
 */
export declare function getiOSScopeFromScopes(scopes?: ApiScope[]): number;
export default ApiScope;
