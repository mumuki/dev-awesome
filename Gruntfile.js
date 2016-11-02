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
          htmlDemo: true,
          destHtml: 'dist',
          types:['eot','svg','ttf','woff','woff2'],
          font: 'dev-awesome',
          stylesheets: ['css', 'scss', 'less'],
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
