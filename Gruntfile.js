module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

    var _ = require('lodash');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: [
                    "build"
                ]
            }
        },

        copy: {
            server: {
                files: [
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'views',
                      src: [
                          'index.html'
                      ],
                      dest: 'build',
                      filter: 'isFile'
                  },
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'bower_components',
                      src: [
                          '**/*'
                      ],
                      dest: 'build/bower_components'
                  },
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'client/templates',
                      src: [
                          '**/*'
                      ],
                      dest: 'build/templates'
                  },
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'client/images',
                      src: [
                          '*.png',
                          '*.jpg',
                          '*.svg'
                      ],
                      dest: 'build/images'
                  },
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'client/fonts',
                      src: [
                          '**/*'
                      ],
                      dest: 'build/fonts'
                  },
                  {
                      expand: true,
                      flatten: false,
                      cwd: 'client/styles',
                      src: [
                          'app.css'
                      ],
                      dest: 'build/styles'
                  },
                  {
                      expand: true, 
                      flatten: false, 
                      cwd: 'client/javascripts',
                      src: [
                            '**/**'
                      ],
                      dest: 'build/javascripts'
                  }
                ],
            },

        },

        bowerInstall: {
            target: {
                src: [
                    'build/index.html'
                ],
                cwd: '.',
                dependencies: true,
                exclude: [
                    'soundmanager2'
                ],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },

        concat: {
            options: {
                separator: ';\n',
            },
            build: {
                src: [
                    'client/javascripts/app.js',
                    'client/javascripts/routes.js',
                    'client/javascripts/directives/**/*.js',
                    'client/javascripts/controllers/**/*.js',
                    'client/javascripts/services/**/*.js',
                    'client/javascripts/filters/**/*.js'
                ],
                dest: 'build/javascripts/app.js',
            },
        },

        uglify: {
            options: {
                mangle: false
            },
          target: {
             files : {
                'build/javascripts/app.min.js' : ['build/javascripts/app.js'],
                'build/javascripts/vendor/sc-player.js' : ['build/javascripts/vendor/sc-player.js'],
                'build/javascripts/_bower.js' : ['build/javascripts/_bower.js']
             }
          },

        },

        bower_concat: {
            build: {
                dest: 'build/javascripts/_bower.js',
                bowerOptions: {
                  relative: false
                },
                dependencies: {

                     'angular': 'jquery'
                },
                callback: function(mainFiles, component) {
                    return _.map(mainFiles, function(filepath) {
                        // Use minified files if available
                        var min = filepath.replace(/\.js$/, '.min.js');
                        min = "zzz";
                        return grunt.file.exists(min) ? min : filepath;
                    });
                }
            }
        },

        processhtml: {
            prod: {
                files: {
                    'build/index.html' : 'build/index.html'
                }
            }
        },

        sass: {
            dist: {
                options:{
                    compass: true,
                    update: true
                },
                files: {
                    'client/styles/app.css': 'client/scss/app.scss'
                }
            }
        },

        cssmin: {
            add_banner: {
                files: {
                    'build/styles/app.min.css': ['client/styles/app.css']
                }
            }
        },

        watch: {
            client: {
                files: [
                  'client/javascripts/**/*.js',
                  'client/scss/**/*.scss',
                  'views/index.html',
                  'client/templates/**/*',
                  'client/images/*'
                ],
                tasks: ['build:dev'],
                options: {
                  livereload: true
                }
            }
        },

         compass: {
            dist: {
                options: {
                    sassDir: 'client/scss',
                    cssDir: 'client/styles',
                    environment: 'development',
                    watch: false
                }
            }
        },

        connect: {
          server: {
            options: {
              base: 'build',
              port: 8000,
              hostname: '*'
            }
          }
        },

       replace: {
         prod: {
           options: {
             patterns: [
              {
                match: /app\.js/g,
                replacement: 'app.min.js'
              },
              {
                match: /app\.css/g,
                replacement: 'app.min.css'
              }
              ]
            },
            files: [
              {expand: true, flatten: true, src: ['build/index.html'], dest: 'build/'}
            ]
          }
        }

    });

    grunt.registerTask('w', [
        'connect',
        'build:dev',
        'watch:client'
    ]);

    grunt.registerTask('build:dev', [
        'clean',
        'copy',
        'bowerInstall',
        'concat', 
        'bower_concat', 
        'processhtml', 
        'compass'
    ]);


    grunt.registerTask('build:prod', [
        'connect', 
        'build:dev',
        'cssmin',
        'uglify',
        'replace',
        'watch:client'        
    ]);

};
