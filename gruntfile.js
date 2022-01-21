/*global module:false,require:false*/

module.exports = function(grunt) {
	'use strict';

	// Initial project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		banner: '/*! v<%= pkg.version %> - */'
	});

	grunt.loadTasks( "_build" );

	// Default task.
	grunt.registerTask('default', [
		'concat:css',
		'uglify',
		'cssmin:css',
		'critical'
	]);

	grunt.registerTask('prod', [
		'concat:css',
		'uglify',
		'cssmin:css',
		'critical'
	]);

	grunt.registerTask('watch-css', [
		'concat:css',
		'uglify',
		'cssmin:css'
	]);

	grunt.registerTask('watch-js', [
		'uglify'
	]);
};