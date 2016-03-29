# Banner Ads
This is a basic Jekyll setup to expedite the development of banner ads. After creating numerous banner
ads at work, I decided to streamline my process. If this helps anyone out, even better! No promises it's perfect.

## Notes:

### This is built in Jekyll. https://jekyllrb.com/
	Jekyll is a static site generator that compiles Sass, Markdown and Liquid Tempting files into a static site or collection of files
	http://gulpjs.com/
	http://kramdown.gettalong.org/
	https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Two config files
	After struggling with various URLs on a staging site and not being able to control the baseurl and url as needed
	through Jekyll's default, I set up the 'dev' default config and production config files.

	The default config will work with the default Gulp command (see below) while the production config will work with
	the **gulp produce** command. The default command, **gulp**, will:
	- Build Jekyll standard config
	- Launch Browser Sync
	- Watch for changed to the \_site files and reload based on those changes

	The **gulp produce** command will build the Jekyll site based on **_config_production.yml** parameters.

### I’ve implemented Gulp. This requires Node, NPM and Gulp to be installed.
	There are some required gulp packages built into the Gulp command:
	- Browser Sync 	https://www.browsersync.io/
	- Gulp Concat	https://github.com/contra/gulp-concat
	- Gulp Sass	https://www.npmjs.com/package/gulp-sass
	- Gulp Nano	https://www.npmjs.com/package/gulp-cssnano
	- Gulp Util	https://github.com/gulpjs/gulp-util
