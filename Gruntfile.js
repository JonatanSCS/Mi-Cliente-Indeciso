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
      pretty: {
        files: {
            'index.html': 'index.jade',
          'polymer-elements/usuario.html': 'polymer-elements/usuario.jade',
          'polymer-elements/tweet-pablo.html': 'polymer-elements/tweet-pablo.jade',
        },
       options: {
         pretty: true
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
          'css/style.css': ['css/home.styl', 'css/form-NuevoUsuario.styl', 'css/nuevo_tweet.styl'],
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
                files: ['css/home.styl',
                        'index.jade',
                        'polymer-elements/usuario.jade',
                        'polymer-elements/tweet-pablo.jade',
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