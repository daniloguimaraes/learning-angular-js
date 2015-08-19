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
            runWiredep: {
                files : ['bower.json'],
                tasks: ['wiredep']
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
        }
  });

    grunt.registerTask('build', ['clean', 'copy', 'concat', 'ngAnnotate']);
    grunt.registerTask('dev', ['watch']);
};