module.exports = function (grunt) {

  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        src: 'svg/colored/*',
        dest: 'dist/fonts/dev-awesome/',
      }
    },
    webfont: {
      icons: {
        src: 'svg/black/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        destScss: 'dist/scss',
        destLess: 'dist/less',
        options: {
          codepointsFile: './codepoints.json',
          htmlDemo: true,
          htmlDemoFilename: 'index',
          htmlDemoTemplate: 'template/dev-awesome.html',
          destHtml: './',
          types:['eot','svg','ttf','woff','woff2'],
          font: 'dev-awesome',
          stylesheets: ['css', 'scss', 'less'],
          template: 'template/dev-awesome.css',
          templateOptions: {
            baseClass: 'da',
            classPrefix: 'da-'
          }
        }
      }
    },
    clean: {
      dist: ['dist'],
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /\.\.\/fonts\/dev-awesome/g,
              replacement: '#{$da-font-path}/dev-awesome',
            },
            {
              match: /\/\/ <<<DEV_AWESOME_PATH>>>/,
              replacement: '$da-font-path: "../fonts" !default;'
            }
          ]
        },
        files: [
          { src: ['dist/scss/_dev-awesome.scss'], dest: 'dist/scss/_dev-awesome.scss'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('build', ['clean:dist', 'webfont', 'copy', 'replace']);

};
