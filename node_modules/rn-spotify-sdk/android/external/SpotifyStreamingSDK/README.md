**WARNING: This is a beta release of the Spotify Android SDK.**

Spotify Android SDK
===================

Welcome to Spotify Android SDK. This project is for people who wish to develop
Android applications containing Spotify-related functionality, such as audio streaming and
user authentication and authorization.

Note that by using this SDK, you accept our [Developer Terms of
Service](https://beta.developer.spotify.com/terms/).


Beta Release Information
=======

We're releasing this SDK early to gain feedback from the developer community
about the future of our Android SDKs. Please file feedback about missing issues or
bugs over at our [issue tracker](https://github.com/spotify/android-sdk/issues),
making sure you search for existing issues and adding your voice to those
rather than duplicating.

 [Open bug tickets](https://github.com/spotify/android-sdk/labels/bug) |
 [Open feature requests](https://github.com/spotify/android-sdk/labels/feature%20request) | [All](https://github.com/spotify/android-sdk/issues)

For known issues and release notes, see the
[CHANGELOG.md](https://github.com/spotify/android-sdk/blob/master/CHANGELOG.md)
file.


Getting Started
===============

1. Checkout [Spotify Android SDK](https://github.com/spotify/android-sdk) master branch.
2. Have a look at the [example](samples/DemoProject/src/main/java/com/spotify/sdk/demo/DemoActivity.java)


The SDK's structure
===================

The Spotify Android SDK consists of two libraries.
One of them handles authentication flow and the other one manages audio playback.
The libraries work well together but can also be used separately, for example if
the application doesn't need to play music it can use just Spotify Authentication module by itself.

Spotify Authentication Library
------------------------------

This library is responsible for authenticating the user and fetching the access token
that can subsequently be used to play music or be used in requests to the Spotify Web API.

You can find the Android Auth SDK [here](https://github.com/spotify/android-auth/).

To learn more about working with authentication see the
[Authentication Guide](https://beta.developer.spotify.com/documentation/android-sdk/guides/android-authentication/)
and the [API reference](https://spotify.github.io/android-auth) on Spotify for Developers.

Spotify Player Library
----------------------

This library can play music from Spotify after the user logs in with the access token.
**Only Premium Spotify users will be able to log in and play music with this library.**.

To add this library to your project copy the `spotify-player-*.aar` file from the
[Android SDK](https://github.com/spotify/android-sdk) to the `libs`
folder in your app project and add the reference to its `build.gradle` file.
For version `24-noconnect-2.20b` it would be:

```
compile 'com.spotify.sdk:spotify-player-24-noconnect-2.20b@aar'
```

To learn more about working with the player see the
[Quick Start](https://beta.developer.spotify.com/documentation/android-sdk/quick-start/)
and the [API reference](https://spotify.github.io/android-sdk/) on Spotify for Developers.

Spotify Web API
---------------

The Web API wrapper is currently not a part of the SDK project but there are
a few open source [Web API libraries](https://beta.developer.spotify.com/documentation/web-api/libraries/)
available for Android.


Authenticating and Scopes
=========================

You can generate your application's Client ID, Client Secret and define your
callback URIs on your [Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard/).

When connecting a user to your app, you *must* provide the scopes your
application needs to operate. A scope is a permission to access a certain part
of a user's account, and if you don't ask for the scopes you need you will
receive "permission denied" errors when trying to perform various tasks.

You do *not* need a scope to access non-user specific information, such as to
perform searches, look up metadata, etc. A full list of scopes can be found in our 
[Authorization Scopes Guide](https://beta.developer.spotify.com/documentation/general/guides/scopes/).

If your application's scope needs to change after a user is connected to your app,
you will need to throw out your stored credentials and re-authenticate the user 
with the new scopes.

**Important:** Only ask for the scopes your application needs. Requesting playlist
access when your app doesn't use playlists, for example, is bad form.
