module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-contrib-uglify-es" );

	grunt.config( "uglify", {
		sw: {
			files: {
				'_src/sw.js': ['_site/sw.js']
			}
		},
		prism: {
			files: {
				'_src/prism.js': ['_site/prism.js']
			}
		}
	});
};