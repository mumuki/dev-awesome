# DevAwesome

DevAwesome brings an awesome set of programming language icons.
This project contains glyphs derived from [DevIcons](http://vorillaz.github.io/devicons) and is inspired by [FontAwesome](http://fontawesome.io).

## Install it

```sh
bower install --save dev-awesome
```

## Use it

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="bower_components/dev-awesome/dist/dev-awesome.css">
  </head>
  <body>
    <i class="da da-haskell"></i>
  </body>
</html>

```

## Contribute

#### What you need?

You need to install:

* Last version of `FontForge`

```bash
sudo add-apt-repository ppa:fontforge/fontforge
sudo apt-get update
sudo apt-get install fontforge
```

* `Grunt`

```bash
npm install -g grunt-cli
```

#### Steps

1. Fork this repository.
1. Add a 32x32 colored svg icon into `svg/colored` folder.
1. Add a 32x32 black svg icon into `svg/black` folder.
1. Send PR to our `master` branch.

**Notes**:
* If you need to test locally you can run `grunt build` and an `index.html` in root.
* PR with changes in `dist` or `index.html` folder will be closed.
