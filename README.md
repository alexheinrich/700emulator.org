# 700 web synthesizer

A status quo of an attempt to make a web synthesizer based on the Buchla 700. This is a non-commercial project aiming to preserve and make accessible early digital synthesizer technology.

Currently the page furthest implemented is the 'Instrument Designer'. Here it is possible to switch tabs, add function points (by clicking with the mouse to the desired value) and removing them (by pressing a button on the keyboard). Also the FM configuration is drawn in the bottom left of the screen.
## Folder structure
The main source code can be found under `src/`, under `fpu/` there are currently some first attempts for a WebAssembly implementation of a sound engine.

## Installation
```
npm install
```

To run and serve locally:
```
npm run serve
```

To deploy to github pages:
```
npm run deploy
```
## Preview
A preview of the current status can be viewed here: [https://alexheinrich.github.io/700emulator.org/](https://alexheinrich.github.io/700emulator.org/)
This is far from a final product, so the latest Chrome or Firefox browser is recommended.
