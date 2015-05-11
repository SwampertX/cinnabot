module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', '*.js'],
            options: {
                ignores: ['test*']
            }
        },
        jscs: {
            src: '*.js',
            options: {
                config: '.jscsrc',
                excludeFiles: ['test*']
            }
        },
        jsbeautifier: {
            files: ['*.js'],
            options: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs'); // js code style
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('default', ['jshint', 'jsbeautifier']);
    grunt.registerTask('style', ['jscs']);
};
