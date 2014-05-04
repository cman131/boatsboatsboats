module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-http-server');

  grunt.initConfig({
    'http-server': {
      'dev': {
        root: '.',
        port: 8008,
        host: '127.0.0.1',
        cache: 0,
        showDir: false,
        autoIndex: true,
        defaultExt: 'html',
        runInBackground: false
      }
    }
  });

  grunt.registerTask('default', ['http-server:dev']);
}
