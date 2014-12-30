module.exports = {
    options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
    },
    js: {
        files: {
            '<%= paths.build %>/jquery.incredible.srcset.min.js': ['<%= paths.src %>/jquery.incredible.srcset.js']
        }
    }
};
