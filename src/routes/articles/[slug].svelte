<script context="module">
  import { urls, metaTitle } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${urls.POST}slug:${params.slug}`);
    if (res.status !== 200) {
      return this.error(404, 'Not found');
    }
    const data = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    if (catres.status !== 200) {
      return this.error(404, 'Not found');
    }
    const catmenu = await catres.json();

    let authorUrl = 'https://en.gravatar.com/' + data.author.nice_name + '.json';

    const author = await this.fetch(authorUrl);
    if (author.status !== 200) {
      return this.error(404, 'Page Not found');
    }
    const authordata = await author.json();

    return {post: data, author: authordata, catmenu };
    
  }
</script>

<script>
  
  export let post;
  export let author;
  export let catmenu;
  import Bio from "./../../components/Bio.svelte"
  import Sidebar from "../../components/Sidebar.svelte";
  import TitleHero from "../../components/TitleHero.svelte";
  import SvelteSeo from "svelte-seo";
  import './wp.css';
  import { Email, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter } from 'svelte-share-buttons-component';

	const url = `${urls.BASE}${post.slug}`;
	const title = `${post.title}`;
	const desc = `${post.excerpt}`;
  const img = `${post.featured_image}`;

</script>

<SvelteSeo
  title="{post.title} - {metaTitle}"
  description={post.excerpt}
  openGraph={{
    title: `${post.title} - ${metaTitle}`,
    description: post.excerpt,
    url: `${urls.BASE}${post.slug}`,
    type: "website",
  }}
/>

{#if !post}
<section id="articles"
  class="flex flex-wrap mx-2 overflow-hidden my-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>
  <div>Loading...</div>
  </section>
{/if}
  

<TitleHero title1={post.title} blogdate={post.date}/>
<section id="articles"
  class="flex flex-wrap overflow-hidden lg:px-16 px-6 my-4"
>

  <div
  class="flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
  >
    <div class="content">
      {@html post.content}
    
    </div>

    <Bio {author}/>

    <div class="flex flex-wrap w-full text-left">Share this articles:</div>
    <div class="flex flex-wrap w-full text-left">
    
      <Email subject="{title}" body="{desc} {url}" />
      <Facebook class="share-button" {url} />
      <Twitter class="share-button" text="{title}" {url} hashtags="webdesign-ninjas" />
      <Reddit class="share-button" {title} {url} />
      <LinkedIn class="share-button" {url} />
      <Tumblr class="share-button" {title} {url} caption="{title}" />
      <Pinterest class="share-button" {url} media={img} description={title} />
      <Telegram class="share-button" text={title} {url} />
      <Vk class="share-button" {title} {url} />
      <WhatsApp class="share-button" text="{title} {url}" />
      <Xing class="share-button" {title} {url} />
    </div>

</div>
<div
    class="container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar {catmenu} />
  </div>
</section>