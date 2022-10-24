module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-critical" );

	var path = require( "path" ).resolve( "_site/_assets/css" );

	grunt.config( "critical", {
		test: {
			options: {
				base: './',
				css: [
					'_site/_assets/css/all.css'
				]
			},
			src: '_site/index.html',
			dest: '_src/_assets/css/crit.css'
		}
	});
};