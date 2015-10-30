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
    },
    copy: {
      index: {
        src: 'index.html',
        dest: 'build/index.html'
      }
    }


  });



  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-svg-merge');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['jshint','svgmerge','browserSync']);
  grunt.registerTask('build', ['useminPrepare','concat:generated','cssmin:generated','uglify:generated','filerev','usemin']);

};