module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: 'public'
                }
            }
        },
        watch: {
            files: 'src/**/*',
            tasks: 'concat'
        },
        concat: {
            app: {
                options: {
                    separator: ';\n'
                },
                files: {
                    'public/app.js': [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-animate/angular-animate.js',
                        'node_modules/angular-aria/angular-aria.js',
                        'node_modules/angular-messages/angular-messages.js',
                        'node_modules/angular-material/angular-material.js',
                        'src/**/*.js'
                    ]
                }
            },
            styles: {
                options: {
                    separator: '\n\n'
                },
                files: {
                    'public/styles.css': [
                        'node_modules/angular-material/angular-material.css',
                        'src/**/*.css'
                    ]
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'public/app.min.js': 'public/app.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'connect', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify']);
};
