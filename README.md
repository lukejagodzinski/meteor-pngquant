# Meteor PNGQuant

Lossy compression of PNG images for Meteor using [PNGQuant](http://pngquant.org/)

## Installation

Meteor PNGQuant package can be installed using Meteor package system. Just type in the command line:

```sh
$ meteor add jagi:pngquant
```

## Usage

The last argument (optional) of the `PNGQuant` function is array of arguments that will be passed to `pngquant` command.

```js
PNGQuant('/src/path/to/file.png', '/dest/path/to/file.png', [256, '--speed=1']);
```

The `PNGQuant` function uses Fibers and is synchronous.

## License

MIT
