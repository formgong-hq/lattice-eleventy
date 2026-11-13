export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  return { dir: { input: "src", output: "_site" }, htmlTemplateEngine: "njk" };
}
