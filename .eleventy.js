module.exports = function(eleventyConfig) {
	const CleanCSS = require('clean-css');

	// all posts
	eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

	eleventyConfig.addPassthroughCopy("_src/_assets");
	eleventyConfig.addPassthroughCopy("_src/sw.js");

	eleventyConfig.addFilter(
		'cssmin',
		code => new CleanCSS({}).minify(code).styles
	);

	return {
		templateFormats: [
			"md",
			"njk",
			"html"
		],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: "/",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "_src",
			includes: "_templates",
			data: "_data",
			output: "_site"
		}
	};
};
