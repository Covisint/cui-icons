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
    svgmerge: {
      files: {
        src: ['src/resources'],
        dest: 'dist'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
            src : [
                '*.html',
                '*.js',
                '*.css'
            ]
        },
        options: {
          online: true,
          server:{
            baseDir: './'
          }
        }
      }
    }


  });



  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-svg-merge');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['jshint','svgmerge','browserSync']);

};