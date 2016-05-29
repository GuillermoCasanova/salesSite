module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

    var _ = require('lodash');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        app: 'client',
        dist: 'build',
        clean: {
            build: {
                src: [
                    "build"
                ]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'<%= app %>/',
                    src: ['assets/**/*', '**/*.html','*.xml', '**/*.php', '!**/*.scss', '!bower_components/**', 'data/**'],
                    dest: '<%= dist %>/'
                } ]
            },
        },

        uglify: {
            options: {
                preserveComments: 'some',
                mangle: false
            }
        },

        useminPrepare: {
            html: ['<%= app %>/index.html'],
            options: {
                dest: '<%= dist %>'
            }
        },

        usemin: {
            html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
            css: ['<%= dist %>/css/**/*.css'],
            options: {
                dirs: ['<%= dist %>']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded', // expanded or nested or compact or compressed
                    loadPath: '<%= app %>/bower_components/foundation/scss',
                    compass: true,
                    quiet: false,
                      update: true,
                      lineNumbers: true
                },
                files: {
                    '<%= app %>/css/app.css': '<%= app %>/scss/app.scss'
                }
            }
        },

        watch: {
            client: {
                files: [
                  'client/js/**/*',
                  'client/scss/**/*.scss',
                  'views/index.html',
                  'client/templates/**/*',
                  'client/images/*'
                ],
                tasks: ['compile-sass', 'bower-install'],
                options: {
                  livereload: true
                }
            }
        },
        wiredep: {
            target: {
                src: [
                    '<%= app %>/index.html'
                ],
                exclude: [
                    'modernizr'
                ]
            },
          options: {
              bowerJson: require('./bower.json')
          }
        },

        connect: {
          server: {
            options: {
              base: '<%= app %>',
              port: 8000,
              hostname: '*'
            }
          }
        }

    });



    grunt.registerTask('compile-sass', ['sass']);
    grunt.registerTask('bower-install', ['wiredep']);

    grunt.registerTask('default', ['compile-sass', 'bower-install', 'connect', 'watch']);


    grunt.registerTask('publish', ['compile-sass', 'clean', 'useminPrepare', 'copy', 'concat', 'cssmin', 'uglify', 'usemin']);
    

};
