# Banner Ads
This is a basic Jekyll setup to expedite the development of banner ads. After creating numerous banner ads at work, I decided to streamline my process. If this helps anyone out, even better! No promises it's perfect.

## Notes:

### This is built in Jekyll. https://jekyllrb.com/
Jekyll is a static site generator that compiles Sass, Markdown and Liquid Tempting files into a static site or collection of files
http://gulpjs.com/
http://kramdown.gettalong.org/
https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Process for development
Banner ads are individually built within the 'ads' folder. The front matter of these files will determine the layout of the ad during development. The main areas to watch are **layout, js and greensock**.

#### layout
For layout there are two options:
- **for_development:** This layout will include the navigation menu below the banner ads so that a user can navigate the different sized ads without having to enter specific URLs
- **for_production:** A production layout, this will strip all extraneous elements from the final page, including the navigation and wrappers.

#### js
The js front matter will reference a JavaScript file of the corresponding name. By default, these are already set to have a js file for each html file.

#### usejs
This is a boolean for whether the page will use the javascript file called under the js front matter. If the file will not be used, this call is omitted to save on server requests.

#### greensock
This is a boolean of whether the banner ad will utilize the [GreenSock Animation Platform (GSAP)](http://greensock.com/) library. If this is set to true, a script will be added before the close of the body tag to pull the TweenLite, CSSPlugin and EasePack libraries from a cloudflare CDN. If the library will not be used, these calls will be omitted to save on server requests.

### Process for production
In the front matter, the layout is defaulted to 'page'. This means the layout will include a menu below the digital ads where a user can navigate the different sizes. For production purposes, the layout will need to be changed to 'ad' instead of 'page' so the extraneous menu will be removed, leaving only the necessary elements for the ad itself.

### Two config files
After struggling with various URLs on a staging site and not being able to control the baseurl and url as needed through Jekyll's default, I set up the 'dev' default config and production config files.

The default config will work with the default Gulp command (see below) while the production config will work with the **gulp produce** command. The default command, **gulp**, will:
- Build Jekyll standard config
- Launch Browser Sync
- Watch for changed to the \_site files and reload based on those changes

The **gulp produce** command will build the Jekyll site based on **_config_production.yml** parameters.

### I’ve implemented Gulp. This requires Node, NPM and Gulp to be installed.
There are some required gulp packages built into the Gulp command:
- Browser Sync  https://www.browsersync.io/
- Gulp Concat   https://github.com/contra/gulp-concat
- Gulp Sass https://www.npmjs.com/package/gulp-sass
- Gulp Nano https://www.npmjs.com/package/gulp-cssnano
- Gulp Util https://github.com/gulpjs/gulp-util
