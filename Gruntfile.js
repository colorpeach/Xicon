module.exports = function(grunt) {
    
    grunt.initConfig({
        less: {
          development: {
            options: {
              paths: ['less']
            },
            files: {
              "css/Xicon.css": "less/Xicon.less"
            }
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    
    grunt.registerTask('default', ['less']);
};