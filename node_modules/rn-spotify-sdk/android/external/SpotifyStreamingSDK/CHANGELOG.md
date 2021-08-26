Version 24-noconnect-2.20b
====================

**API changes/Fixes**

* `ConnectionStateCallback#onLoginFailed()` takes an Error now, not an int. https://github.com/spotify/android-sdk/issues/300
* Less meaningless logging is happening now https://github.com/spotify/android-sdk/issues/303
* PlaybackState and Metadata are updated on every cycle now


Version beta23-noconnect-2.20b
====================

**Fixed issues**

* (How to get current position of track repeatedly?)[https://github.com/spotify/android-sdk/issues/283]
* (Please include the layout file in the examples folder)[https://github.com/spotify/android-sdk/issues/269]


Version beta22-noconnect-2.20b
====================

**What's new**

* x86_64 and arm64 support
* Add `contextUri` and `contextName` to `Metadata` class. What is that? If you play a playlist, 
then `contextUri` is a Spotify URI for the playlist, and `contextName` is a name of the playlist.
* Add `albumCoverWebUrl` to `Metadata`.

**API changes**

* Most of the methods of `SpotifyPlayer` now expect an `OperationCallback` as the first argument so that you can listen to the 
the result of the operations like play, skip, pause etc.

**Bug fixes**

* Disk cache works now  

Version beta21-noconnect-2.18c
====================

**What's new**

* IPv6 network support
* `Player` renamed to `SpotifyPlayer`
* `spotifyPlayer.play(uri)` is changed to `spotifyPlayer.play(uri, index_in_context, start_from_ms)`
* `spotifyPlayer.play(uri, index_in_context, start_from_ms)` supports Spotify URIs for tracks, albums, playlists
* Error and PlayerEvent classes added with description
* `Metadata` class added to expose the information about current, next, previous tracks
* To obtain `Metadata` instance call `spotifyPlayer.getMetadata()`
* `PlaybackState` class added, get it using `spotifyPlayer.getPlaybackState()`

Version 1.0.0-beta13
====================

**What's new**

* Remove support for armV5 reducing the library size to 1mb

**Bug fixes**

* Fix a java.lang.ClassNotFoundException authentication error on Samsung devices ([Issue #217](https://github.com/spotify/android-sdk/issues/217))
* Fix a crash caused by cache ([Issue #224](https://github.com/spotify/android-sdk/issues/224))

Version 1.0.0-beta12
====================

**What's new**

* This SDK now uses Spotify Android app to obtain access tokens. For more information see the
[Auth Guide](https://developer.spotify.com/technologies/spotify-android-sdk/android-sdk-authentication-guide/)
* Target SDK version is now 23 (Marshmallow)

**Bug fixes**

* Fix a crash when no auth request present when invoking `LoginActivity` ([Issue #164](https://github.com/spotify/android-sdk/issues/164))
* Fix a crash when `AudioTrack` doesn't initialize properly ([Issue #160](https://github.com/spotify/android-sdk/issues/160))


Version 1.0.0-beta11
====================

**Bug fixes**

* Native crash in the player was fixed ([Issue #96](https://github.com/spotify/android-sdk/issues/96))
* Tracklist with size 1 can now be played using `PlayConfig.withTrackIndex(0)` ([Issue #119](https://github.com/spotify/android-sdk/issues/119))
* Player initialization issues for certain phone models are fixed ([Issue #139](https://github.com/spotify/android-sdk/issues/139))
* LoginActivity stays open when fetching authentication code for 2-step Facebook authentication ([Issue #145](https://github.com/spotify/android-sdk/issues/145))
* `allowBackup=true` was removed from libraries' manifests ([Issue #153](https://github.com/spotify/android-sdk/issues/153))

Version 1.0.0-beta10
====================

**What's new**

* `TRACK_CHANGED` event is back. `TRACK_START` and `TRACK_END` are deprecated now.

**Bug fixes**

* CPU usage is much lower and much more battery friendly now ([Issue #98](https://github.com/spotify/android-sdk/issues/98))
* Player won't incorrectly report initialized state if it has been shut down.
* `InitializationObserver` will call back with `onError` if Player had been shutdown before it finished initializing. ([Issue #97](https://github.com/spotify/android-sdk/issues/97))
* Potentially infinite loop in the Player initialization has been fixed.
* Internal buffer size has been increased to better accommodate for unstable network connections. ([Issue #98](https://github.com/spotify/android-sdk/issues/102))

Version 1.0.0-beta9
===================

**What's new**

* Spotify Android SDK is now shipped as two separate libraries -
  one that handles authentication `spotify-auth-1.0.0-beta9.aar` and one
  containing the player `spotify-player-1.0.0-beta9.aar`. 
  Applications that do not use playback can now include just the authentication module.
  To use the new libraries a change in build files is required:
  ```java
  // Before 1.0.0-beta9
  compile 'com.spotify.sdk:spotifysdk:1.0.0-beta9@aar'
  
  // From 1.0.0-beta9
  compile 'com.spotify.sdk:spotify-player:1.0.0-beta9@aar'
  compile 'com.spotify.sdk:spotify-auth:1.0.0-beta9@aar'
  ```
  The name of the package containing playback related classes was changed
  from `com.spotify.sdk.android.playback` to `com.spotify.sdk.android.player`.
  More details can be found on the [Spotify Android SDK page](https://developer.spotify.com/technologies/spotify-android-sdk/).
* We finally have x86 support! ([Issue #35](https://github.com/spotify/android-sdk/issues/35))
* `AuthenticationClient#createLoginActivityIntent` method was added.
  This method returns an intent that can be used to show the `LoginActivity` from a Fragment.
  This intent can be used both with `android.app` and `android.support` Fragments. ([Issue #73](https://github.com/spotify/android-sdk/issues/73))
* Additional checks were introduced to ensure that `null` callbacks can't be added to the `Player`.

**Bug fixes**

* Better error handling when `LoginActivity` is launched without a calling activity.
  In such case a descriptive error message will be logged in the logcat. ([Issue #80](https://github.com/spotify/android-sdk/issues/80))
* `BadTokenException` in LoginDialog fixed ([Issue #95](https://github.com/spotify/android-sdk/issues/95))

**Known bugs**

* Unavailable track error currently reports wrong uri.

Version 1.0.0-beta8
===================

**What's new**

* Login flow in the WebView. It is no longer necessary to open the web browser
  to log users in. See `AuthenticationClient#openLoginActivity` for details.
* `PlayerState` now implements `Parcelable`.
* `Spotify#getPlayer` method is static.

**Known bugs**

* Using queue methods together with regular playback might behave unreliably


Version 1.0.0-beta7
==================

**What's New**

* SDK includes native libraries for ARMv7 devices
* New way to get access to audio data. Instead of subclassing the `Player`
  it is now possible to create a custom `AudioController` and pass it to the
  player during creation. For details refer to `AudioController` class
* Subclassing the `Player` is no longer possible. This is because there's no need for it
  with custom `AudioController`s.
* Initialized `Player` instance is passed to the `Player.InitializationObserver#onInitalized` callback.
* It is possible to set playback bitrate. Default bitrate is set to 160kbit/s.
  For more details see `Player#setPlaybackBitrate` method and `PlaybackBitrate` object.
* Player has two new methods: `login` and `logout` which can be used to log back in
  after losing connectivity or to switch users.
* It is now possible to specify which handler player should post its callback on (default is
  main thread)
* One of the `ConnectionStateCallback` methods has been removed.
* To use all brand new options Player has a brand new Builder.

**Bug fixes**

* Only playback events are delivered to `PlayerNotificationCallback#OnPlaybackEvent`
* Lots of internal Player fixes mostly related to concurrency.

Version 1.0.0-beta6
===================

**What's New:**

* Starting a song from specified position is now possible.
  Check out the new `PlayConfig` class and `Player#play(PlayConfig)` method to see how to use it.
* We added some more error handling. This means you can get new types of errors
  in `PlayerNotificationCallback#onPlaybackError` if something goes wrong.
* Disk cache is now turned on by default. It can be turned off by invoking `Config#useCache`
  with `false`.
* Initialization of the player changed slightly. Now you'll need to pass a `Config` object
  with valid client ID when getting the player:

  ```java
  // Old way:
  Spotify spotify = new Spotify("myauthtoken");
  Player player = spotify.getPlayer(context, "mycompany", referenceObj, initObserver);

  // New way
  Spotify spotify = new Spotify("myauthtoken");
  Config playerConfig = new Config(context, "myauthtoken", "myclientid");
  Player player = spotify.getPlayer(playerConfig, referenceObj, initObserver);
  ```

* It is possible to inject a custom player to the `Spotify` class with `Spotify#setPlayer` method.

**Bug fixes**

* We tweaked playback logic a bit. Now the player should much more responsive
  when skipping songs or changing contexts.
* SDK is now tested with Lollipop (Android 5.0)

**Known issues**

* If you try playing a playlist from an index beyond the playlist size, there's no related
  playback error triggered.
* The same issue occurs when trying to play a song with the initial position that is
  beyond its duration.

Version 1.0.0-beta5
===================

**What's New:**

* We introduced two new playback events: `TRACK_START` and `TRACK_END` which
  replace the `TRACK_CHANGED` event.
  The uri of the track that started or finished playing can be read from
  player state sent with those events. ([Issue #8](https://github.com/spotify/android-sdk/issues/8))
* SDK now handles playback errors with new `PlayerNotificationCallback#onPlaybackError` method 
  which can be used to handle the unavailable tracks errors. ([Issue #37](https://github.com/spotify/android-sdk/issues/37))
* As an experimental feature you can now use disk cache in your app. It will store streamed
  tracks locally on the device and read them from disk when played next time.
  To enable disk cache, initialize Spotify as follows:

  ```
  Spotify spotify = new Spotify("myauthtoken");
  spotify.useCache(true);
  ```

**Bugs fixed:**

* `InitializationObserver#onError` callback is now delivered correctly on the UI thread.


Version 1.0.0-beta4
===================

**What's New:**

* You will now get player state with every player event.
* The player state now contains information about currently playing track
  and its duration. ([Issue #22](https://github.com/spotify/android-sdk/issues/22))
* Instead of keeping a copy of player state from native player inside Player object
  `getPlayerState()` is now asynchronous and requires a callback.
* We removed these methods from the Player object:
  * `isPlaying()`
  * `getPlaybackPosition()`
  * `isShuffling()`
  * `isRepeating()`

  This data can now be retrieved asynchronously with `getPlayerState()` or from
  the player state passed with player events.
* New callback for errors while logging in.
* Player initialization callback is now triggered after user successfully logs in.

**Bugs fixed:**

* SDK does not mix playback with Spotify App. ([Issue #28](https://github.com/spotify/android-sdk/issues/28))


Version 1.0.0-beta3
===================

**What's New:**

* We added the possibility to play a list of tracks (for example, an album's tracks).
Playing the list of tracks also supports playing from a specified index ([Issue #11](https://github.com/spotify/android-sdk/issues/11)).
* Improved API reference manual.

**Bugs Fixed:**

* We fixed clearing the buffer after pausing the playback and context switching now works correctly
 ([Issue #21](https://github.com/spotify/android-sdk/issues/21)).
* No more error when context ends ([Issue #20](https://github.com/spotify/android-sdk/issues/20))


Version 1.0.0-beta2
===================

**What's New:**

* SDK now comes as a single aar library.
* Added method to clear queued tracks.

**Bugs Fixed:**

* getPlaybackPosition returns correct values after seeking position
 ([Issue #7](https://github.com/spotify/android-sdk/issues/7)).

**Known Issues**

* You can't play albums yet.
* Switching between playback contexts is buggy.


Version 1.0.0-beta1
===================

**What's New:**

* Initial release

**Known Issues:**

* SDK limited to authentication and playback. All other functionality is
  currently provided by the Web API.
