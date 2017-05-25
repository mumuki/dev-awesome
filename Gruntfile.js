module.exports = function (grunt) {

  grunt.initConfig({
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('build', ['clean:dist', 'webfont']);

};
