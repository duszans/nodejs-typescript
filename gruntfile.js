module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        symlink: {
            dist: {
                src: 'lib',
                dest: 'node_modules/lib'
            }
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                tsconfig: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks("grunt-ts");

    // Default task(s).
    grunt.registerTask('default', ['symlink:dist', 'ts']);

};