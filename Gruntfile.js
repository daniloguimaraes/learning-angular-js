module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options : {
                livereload: true
            },
            monitorWebFiles: {
                files: ['app/**/*.js', '**/*.html', 'app/**/*.css']
            },
            watchBowerModification: {
                files : ['bower.json'],
                tasks: ['wiredep']
            },
            watchLessModification: {
                files : ['app/**/*.less'],
                tasks: ['less']
            },
            watchJsHint: {
                files: ['app/**/*.js'],
                tasks: ['jshint']
            }
        },
        // injeta as dependencias -->
        wiredep : {
            target: {
                src : 'produtos.html'
            }
        },
        // copia os arquivos para a pasta build -->
        copy : {
            indexs: {
                files : [
                    {
                        expand: true,
                        src: ['*.html', 'app/**'],
                        dest: 'build/'
                    }
                ]
            }
        },
        // mescla os arquivos js para um arquivo so -->
        concat : {
            principal : {
                src : ['app/js/app-config.js', 'app/js/BootstrapController.js'],
                dest : 'build/js/principal.js'
            }
        },
        // clean -->
        clean : {
            app : {
                src: ['build']}
        },
        // injeta dependencias do angular -->
        ngAnnotate : {
            options : {
                singleQuotes : true
            },
            build : {
                files : [
                    {
                        expand : true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },
        uglify : {
            build : {
                files : [
                    {
                        expand : true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },
        less: {
          app: {
              files : {
                  "app/css/app.css" : "app/less/app.less"
                }
          }
        },
        cssmin: {
            build : {
                files : [
                    {
                        expand : true,
                        src: ['build/**/*.css']
                    }
                ]
            }
        },
        htmlmin: {
            build : {
                options : {
                    removeComments : true,
                    collapseWhitespace : true
                },
                files : [
                    {
                        expand : true,
                        src: ['build/**/*.html']
                    }
                ]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        }
  });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate']);
    grunt.registerTask('dev', ['watch']);
};