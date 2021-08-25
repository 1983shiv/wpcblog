/**
 * this file is use to define the layout, menu setttings and urls setup for your wordpress urls.
 * just write wordpress subdomain handles here, like your wordpress.com website url is :
 * n1demo.wordpress.com, hence handle/subdomain  will be n1demo.
 */

export const wpHandle = "currencymarket390670375";
export const metaTitle = "Currency Market Reviews";
// not more than 150 characters;
export const metaDescription = "Articles and analysis overview of investment, personal finance and technical analysis of securities, future, forex and penny stocks";

// please add slug of categories those you want to display on homepage
export const displayCategory1 = "mutual-fund";
export const displayCategory2 = "stock";
export const displayCategory3 = "currencymarket";

// styling
// just copy your logo.png file to static folder and make customLogo to true.
export const customLogo = true;

// options available Gray, Red, Yellow, Green, Blue, Indigo, Purple, Pink
// https://tailwindcss.com/docs/customizing-colors#overview
export const styling = {
  bgHero : 'gray',
  primeColor : 'purple-500',
  primeColorws : 'purple',
  homeFeaturedArticle : 'White',
  secondaryColor : 'gray',
}

export const settings = {
  POSTPERPAGE: 6,
  blogLayout:'',         // options includes grid, mansoori, timeline
  homePagelayout: '',
  gridCol: 2,           // options 1,2,3,4
  gridColHome: 3,       // showing no. of grid on homepage for recent articles carousels
  primaryColor: '',
  secondaryColor:'',
  bgPrimaryColor:'',
  bgSecondaryColor:'',
  primaryActiveColor:'',
  headingFontFamily:'',
  paraFontFamily:'',
  socialmediaurls: {
    facebook: '#',
    instagram: '#',
    twitter:'#',
    linkedin:'#',
    skype:'#',
  },
  copyright: '© 2021 All rights reserved.'
}
export const urls = {
  BASE: 'http://localhost:3000/',
  POST: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/posts/`,
  PAGES: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/pages/`,
  CATEGORIES: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/categories/`,
  TAGS: `https://public-api.wordpress.com/rest/v1.1/sites/${wpHandle}.wordpress.com/tags/`,
  POSTPERPAGE: 6,
  blogLayout:'',         // options includes grid, mansoori, timeline
  homePagelayout: '',
  gridCol: 2,           // options 1,2,3,4
  gridColHome: 3,       // showing no. of grid on homepage for recent articles carousels
  primaryColor: '',
  secondaryColor:'',
  bgPrimaryColor:'',
  bgSecondaryColor:'',
  primaryActiveColor:'',
  headingFontFamily:'',
  paraFontFamily:'',
  socialmediaurls: {
    facebook: '',
    instgram: '',
    twitter:'',
    linkedin:'',
    skype:'',
  },
  copyright: '© 2021 All rights reserved.'
}

