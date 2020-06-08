module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: 'src/**/*.js',
            tasks: 'concat'
        },
        concat: {
            options: {
                separator: ';\n'
            },
            app: {
                files: {
                    'app.js': [
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
                files: {
                    'style.css': ['node_modules/angular-material/angular-material.css']
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'app.min.js': 'app.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify']);
};
