const Image = require("@11ty/eleventy-img");
const path = require('path')
const CleanCSS = require('clean-css');

module.exports = function(eleventyConfig) {
	async function imageShortcode(src, alt, sizes="100vw", cls="") {
		let metadata = await Image(src, {
			formats: ["avif", "webp", "jpeg"],
			widths: [800, 600, 400],
			urlPath: "./img/",
			outputDir: "./_site/img/",
			filenameFormat: function( id, src, width, format, options ) {
				const ext = path.extname( src ),
				name = path.basename( src, ext );

				return `${name}-${width}.${format}`
			}
		});

		let imageAttributes = {
			alt,
			class: cls,
			sizes,
			loading: "lazy"
		};

		return Image.generateHTML(metadata, imageAttributes);
	}

	eleventyConfig.addAsyncShortcode("respimg", imageShortcode);

	eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

	eleventyConfig.addPassthroughCopy("_src/_assets/");

	// Admin setup
	eleventyConfig.addPassthroughCopy('admin/config.yml');
	eleventyConfig.addPassthroughCopy('admin/previews.js');
	eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
	eleventyConfig.addPassthroughCopy('./equipped', 'equipped');

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
