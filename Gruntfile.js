module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
svgtoolkit: {
  dist: {
    options: {
      generatePNGs: true,
      style: 'src/css/themes/blue.css',
      colorize: '#808000',
      debug: false
    },
    files: [
      {
        expand: true,
        cwd: 'dist/svg/',
        src: '**/*.svg',
        dest: 'dist/icons'
      }
    ]
  },     
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','svgtoolkit']
    }
  }});



  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svg-toolkit');

  grunt.registerTask('default', ['jshint','svgtoolkit']);

};