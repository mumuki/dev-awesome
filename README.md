# DevAwesome

Font and CSS for developers icons

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

* Grunt

#### Steps

1. Fork this repository.
1. Add a 32x32 colored svg icon into `svg/colored` folder.
1. Add a 32x32 black svg icon into `svg/black` folder.
1. Send PR to our `master` branch.

**Note**: If you need to test locally you can run `grunt build` and a html will be generated into `dist` folder. PR with changes in the `dist` folder will be closed.
