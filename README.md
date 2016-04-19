# Banner Ads
This is a basic Jekyll setup to expedite the development of banner ads. After creating numerous banner ads for clients in quick succession, I decided to streamline my process. If this helps anyone out, even better! No promise it's perfect.

## Notes:

### This is built in Jekyll.
Jekyll is a static site generator that compiles Sass, Markdown and Liquid Tempting files into a static site or collection of files. I've been using this workflow for a variety of projects and love the simplicity, flexibility and reliability of building with it.    

The resources I use regularly are:   

- [The Jekyll Site](https://jekyllrb.com/)   
- [Gulp](http://gulpjs.com/)   
- [Kramdown Markdown used by Jekyll](http://kramdown.gettalong.org/)   
- [Liquid Templating](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)   

### Process for development
Banner ads are individually built within the 'ads' folder. The index.html file will display a menu with links to all existing, published pages. The front matter of each ad file will determine the layout of the ad during development vs. production. The main areas to watch are **layout, js and greensock**.

#### layout
For layout there are two options:
- **for_development:** This layout will include the navigation menu below the banner ads and the animation reload button so that a user can browse the different sized ads without having to enter specific URLs
- **for_production:** A production layout, this will strip all extraneous elements from the final page, including the navigation and wrappers

#### js
Whatever string is set as the js front matter will be referenced by each ad during both development and production. The js string will be appended with the .js file extension and called before the closing html tag.   

Each ad has a js file attached by default using the dimensions as the filename with spaces replaced with dashes instead of x's as in the html filenames.

#### usejs
This is a boolean for whether the page will use the javascript file called with the js front matter. If the file will not be used, this call is omitted to save on server requests.

#### greensock
This is a boolean of whether the banner ad will utilize the [GreenSock Animation Platform (GSAP)](http://greensock.com/) library. If this is set to true, a script will be added before the close of the body tag to pull the TweenLite, CSSPlugin and EasePack libraries from a CDN. If the library will not be used, these calls will be omitted to save on server requests.

When looking around for animation solutions, most digital distribution centers I investigated said they will support GSAP from CDN. These libraries offer some enhanced animation options for more complicated sequences. I've found CSS animations can become overly taxing if they are complicated and replacing some with repeated GSAP animations actually decreases overhead for the ad. With the various restrictions in place for digital ads, these original three http requests can actually save you quite a bit of bandwidth.

### Process for production
In the front matter, the layout is defaulted to **for_development**. This means the layout will include a menu below the digital ads where a user can browse the different sizes. For production purposes, the layout will need to be changed to **for_production** instead of **for_development** so the extraneous menu and all wrappers will be removed, leaving only the necessary elements for the ad itself.   

By setting the page layout to **for_production**, you remove all layouts from the file, leaving only the ad's container div. This container div will be sized according to the dimensions of the ad being produced. This should guarantee the ad will display correctly when pushed to whatever ad space is to be used.

### Two config files
After struggling with various URLs on a staging site and not being able to control the baseurl and url as needed through Jekyll's default configuration, I set up the 'dev' default config and 'production' config files.   

The default config will work with the default Gulp command (see below) while the production config will work with the **gulp produce** command. The default command, **gulp**, will:
- Build Jekyll standard config
- Launch Browser Sync
- Watch for changes to the \_site files and reload based on those changes

The **gulp produce** command will build the Jekyll site based on **_config_production.yml** parameters.

### I’ve implemented Gulp. This requires Node, NPM and Gulp to be installed.
The required gulp packages built into the Gulp command are:
- [Browser Sync](https://www.browsersync.io/)
- [Gulp Concat](https://github.com/contra/gulp-concat)
- [Gulp Sass](https://www.npmjs.com/package/gulp-sass)
- [Gulp Nano](https://www.npmjs.com/package/gulp-cssnano)
- [Gulp Util](https://github.com/gulpjs/gulp-util)
