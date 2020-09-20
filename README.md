# idl-login-screen

The purpose of this project is to introduce the reader to Svelte/Sapper as a really modern way to building web applications.
Let's have a look at how it functions and think for ourselves if it is probably the high time to ditch React altogether.

## DISCLAMER

For the simplicity sake message passing on the client-side is done using [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel).
This browser object DOES NOT EXIST IN EITHER THE `Internet Explorer` OR `Safari`, OR `Safari on iOS`. So the front-end will not be functional in these
web browsers.

`In a commercial application I would be using other means to establish communication channels among the application's parts (e.g. main thread and webworkers).`

You will see that the final design of the web page is far from what I have received in the specification. You might find little glitches here and there - 
all this does not mean I didn't give a fuck - I decided that I should come up with the whole prototype which I had enought time for to create,
instead of just pixel perfect visuals and no functionality whatsoever.

All in all this is a prototype, not a ready to release version of software.

## layout

The [scr](src/) directory hosts the [front-end](src/front-end/README.md) and the [back-end](src/back-end/README.md).
Later one more directory will be added with scripts that will pack both guys into containers/unikernels.

## tech requirements

1. node.js version is [14.11.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#14.10.1). Please use [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) for node version management.
2. instead of npm/yarn/whatever this repository uses the magnificient [pnpm](https://github.com/pnpm/self-installer#readme) version `5.6.1` as of the time of writing.

Please keep dependencies up-to-date - people behind them are literally investing their lives to inhance them and fix bugs on daily basis.

## how to see it is working using THE browser

1. open a console at `src/back-end/apiServer`
2. run `NODE_DEBUG=LibAPI node server.mjs`
3. open another console at `src/front-end`
4. run `pnpm run dev`
5. open your Google Chrome at `http://localhost:3000`

## tests

The only tests that I had time to write are located in the [libAPI](src/back-end/libAPI).

## general note

1. You might see files and/or functions that are no longer used by other code in this tiny project. That generally is not okey.
2. A lot of places would probably require rethinking on names.

You are welcome ( and I mean it ) to come back to me to discuss architectural desigions, or design decisions, or their lack thereof.
