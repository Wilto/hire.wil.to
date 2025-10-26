const Image = require("@11ty/eleventy-img");
const path = require('path')
const CleanCSS = require('clean-css');
const feedPlugin = require("@11ty/eleventy-plugin-rss");
const fetch = require('node-fetch');
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
	async function imageShortcode(src, alt, sizes="100vw", cls="") {
		let metadata = await Image(src, {
			formats: ["avif", "webp", "jpeg"],
			widths: [1600, 1200, 800, 600, 400],
			urlPath: "/img/",
			quality: 100,
			outputDir: "./_site/img/",
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
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
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

	eleventyConfig.addPassthroughCopy("_src/_assets/");
  eleventyConfig.addPlugin(feedPlugin, {
      posthtmlRenderOptions: {
          closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
      }
  });

	// Admin setup
	eleventyConfig.addPassthroughCopy('admin/config.yml');
	eleventyConfig.addPassthroughCopy('admin/previews.js');
	eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

	eleventyConfig.addPassthroughCopy('static');

	eleventyConfig.addPassthroughCopy('_redirects');
	eleventyConfig.addPassthroughCopy('./megamanathon', 'megamanathon');

	eleventyConfig.addFilter(
		'cssmin',
		code => new CleanCSS({}).minify(code).styles
	);

  eleventyConfig.addFilter("formatDate", (dateObj) => {
  	  const theDate = new Date( dateObj );
      return DateTime.fromJSDate( theDate ).toLocaleString( DateTime.DATE_MED );
  });

	// Add within your config module
	const md = new markdownIt({
	  html: true,
	});

	eleventyConfig.addFilter("markdown", (content) => {
  	return md.render(content);
	});

	eleventyConfig.addFilter( "newsletterSort", ( collection ) => collection.sort( ( a, b ) => new Date( b.data.pubDate ) - new Date( a.data.pubDate ) ) );

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
