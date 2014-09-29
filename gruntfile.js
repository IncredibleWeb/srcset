module.exports = function (grunt) {
    // setup global variables
    global.fileHeading = '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy hh:MM:ss") %> - <%= pkg.author %> */\n';

    require('load-grunt-config')(grunt, {
        init: true,
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
};