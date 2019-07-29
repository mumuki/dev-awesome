const fs = require('fs');
const del = require('del');
const path = require('path');
const webfontsGenerator = require('webfonts-generator');

const name = 'dev-awesome';

const svgFolder = path.resolve('svg');
const distFolder = path.resolve('dist');
const fontsFolder = path.resolve(distFolder, 'fonts');
const svgFontFolder = path.resolve(svgFolder, 'black');
const templateFolder = path.resolve('template');

const svgFileNames = fs.readdirSync(svgFontFolder);
const codepoints = fs.readFileSync(path.resolve('codepoints.json'));
const coloredSvgFolder = path.resolve(fontsFolder, 'svg', 'colored');


del.sync(distFolder);
fs.mkdirSync(distFolder);
fs.mkdirSync(fontsFolder);
fs.mkdirSync(path.resolve(fontsFolder, 'svg'));
fs.mkdirSync(coloredSvgFolder);


const options = {
  files: svgFileNames.map((svgFile) => path.resolve(svgFontFolder, svgFile)),
  dest: fontsFolder,
  fontName: name,
  cssFontsUrl: '../fonts',

  css: true,
  scss: true,
  html: true,

  cssDest: path.resolve(distFolder, 'css', `${name}.css`),
  scssDest: path.resolve(distFolder, 'scss', `${name}.scss`),
  htmlDest: path.resolve('index.html'),

  cssTemplate: path.resolve(templateFolder, 'css.hbs'),
  scssTemplate: path.resolve(templateFolder, 'scss.hbs'),
  htmlTemplate: path.resolve(templateFolder, 'html.hbs'),

  fixedWidth: true,
  centerHorizontally: false,
  fontHeight: 800,
  descent: 0,

  templateOptions: {
    classPrefix: 'da-',
    baseSelector: 'da',
  },
}

webfontsGenerator(options, (error, s) => {
  if (error) {
    console.error(error)
  } else {
    svgFileNames.forEach((svgFile) => fs.copyFileSync(
      path.resolve(path.resolve(svgFontFolder, '..', 'colored'), svgFile),
      path.resolve(coloredSvgFolder, svgFile)
    ));
    console.info("[Done] :: Happy Mumuki'ng!!")
  }
});