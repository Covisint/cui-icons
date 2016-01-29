module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    copy: {
      index: {
        src: 'index.html',
        dest: 'build/index.html'
      },
      svgs: {
        src: 'dist/**/*.svg',
        dest: 'build/'
      },
      svgList: {
        src: ['logoList','iconList','fontAwesomeList'],
        dest: 'build/'
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
      },
      demo: {
        bsFiles: {
            src : [
                '*.html',
                '*.js',
                '*.css'
            ]
        },
        options: {
          watchTask: false,
          online: true,
          server:{
            baseDir: 'build/'
          }
        }
      }
    },
    useminPrepare: {
      html: './index.html',
      options: {
        src: './',
        dest: './build'
      }
    },
    usemin: {
      options: {
        assetsDirs: ['./build']
      },
      css: ['./build/assets/css/**.*.css'],
      js: ['./build/assets/js/**.*.js'],
      html: ['./build/index.html']
    },
    exec: {
      generate: 'node generateSvgList.js'
    }
  });

  grunt.registerTask('default', ['svgmerge','exec:generate','browserSync:dev']);
  grunt.registerTask('build', ['svgmerge','exec:generate','copy:index','copy:svgs','copy:svgList','useminPrepare','concat:generated','uglify:generated','usemin']);
  grunt.registerTask('demo',['browserSync:demo']);
};