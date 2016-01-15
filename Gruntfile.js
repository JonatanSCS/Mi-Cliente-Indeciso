module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: 'Grunt file/\n'
      },
      build: {
        //src: 'scripts/',
        //dest: 'scripts/'
      }
    },
    
    jade: {
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'index.html': 'index.jade',
          
        }
      } 
    },

    stylus:{
      debug: {
        options: {
          data: {
          debug: true
          }
        },
        files: {
          'css/style.css': 'css/style.styl'
        }
      } 
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          keepalive: true
        }
      }
    },
    watch: {
            stylesheets: {
                files: ['css/style.styl',
                        'index.jade'
                        ],


                tasks: ['stylus','jade'],
                options: {
                    interrupt: true
                }
            }
        },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify', 'jade', 'stylus', 'watch']);
  grunt.registerTask('server', ['connect:server']);



};