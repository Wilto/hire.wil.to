module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-criticalcss" );

	var path = require( "path" ).resolve( "_site/_assets/css" );

	grunt.config( "criticalcss", {
		home: {
			options: {
				url: "https://hire.wil.to/",
				height: 600,
				filename: path + "/all.css",
				outputfile: path + "/crit/all.css"
			}
		}
	});
};