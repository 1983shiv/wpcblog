// sitemap.xml file coding
// https://www.app.codernotes.io/notes/creating-site-map-in-sapper-142
// https://dev.to/yafkari/how-to-render-your-sitemap-xml-file-in-your-svelte-sapper-blog-2joh

const fs = require('fs');
const fetch = require('node-fetch')
const urls = 'https://public-api.wordpress.com/rest/v1.1/sites/currencymarket390670375.wordpress.com/posts/'
const BASE_URL = "currencymarket.review";
const pages = [""];


fs.readdirSync("./src/routes").forEach(file => {
  file = file.split('.')[0];
  if (file.charAt(0) !== '_' && file !== "sitemap" && file !== "index") {
    pages.push(file);
  }
});

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      page => `
    <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
  `
    )
    .join("\n")}
  ${posts
    .map(
      post => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}</loc>
      <priority>0.69</priority>
    </url>
  `
    )
    .join("\n")}
</urlset>
`;

export async function get(req, res, next) {

    const data = await fetch(urls)
    const posts = await data.json()
    // 10 minutes
    res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`);
    res.setHeader("Content-Type", "application/rss+xml");
    // console.log('post2', posts);
    // console.log('typeofposts', typeof(posts));
    const sitemap = render(pages, posts.posts);
    
    res.end(sitemap);
    // res.end('Hello Shiv')
    
}