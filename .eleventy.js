module.exports = (eleventyConfig) => {
    // Copy the "assets" directory to the compiled "_site" folder.
    eleventyConfig.addPassthroughCopy('assets');
  
    return {
      dir: {
        input: './',
        output: './_site'
      },
      templateFormats: [
        'html',
        'liquid',
        'md',
        'njk',
      ]
    };
  };

  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
  };