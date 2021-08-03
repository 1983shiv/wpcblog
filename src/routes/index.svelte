<script context="module">
  import { urls, metaTitle, metaDescription, displayCategory1, displayCategory2, displayCategory3 } from "../../wp-settings.js";

  export async function preload({ params, query }) {
    // all posts
    const res = await this.fetch(urls.POST);
    if (res.status !== 200) {
      return this.error(404, 'Not found');
    }
    const posts = await res.json();

    // featured category posts
    const featuredcat = await this.fetch(`${urls.POST}/?category=featured`);
    if (featuredcat.status !== 200) {
      return this.error(404, 'Not found');
    }
    const featuredPost = await featuredcat.json();

    let dc1Posts = {};
    let dc2Posts = {};
    let dc3Posts = {};
    // displayCategory1's posts
    if (displayCategory1.length > 0) {
      const dc1 = await this.fetch(`${urls.POST}/?category=${displayCategory1}`);
      if (dc1.status !== 200) {
        return this.error(404, 'Not found');
      }
      dc1Posts = await dc1.json();
      dc1Posts = dc1Posts.posts.length > 3 ? dc1Posts.posts.slice(0,4) : dc1Posts.posts;
    }

    // displayCategory2's posts
    if (displayCategory2.length > 0) {
      const dc2 = await this.fetch(`${urls.POST}/?category=${displayCategory2}`);
      if (dc2.status !== 200) {
        return this.error(404, 'Not found');
      }
      dc2Posts = await dc2.json();
      dc2Posts = dc2Posts.posts.length > 3 ? dc2Posts.posts.slice(0,4) : dc2Posts.posts;
    }

    // displayCategory3's posts
    if (displayCategory3.length > 0) {
      const dc3 = await this.fetch(`${urls.POST}/?category=${displayCategory3}`);
      if (dc3.status !== 200) {
        return this.error(404, 'Not found');
      }
      dc3Posts = await dc3.json();
      dc3Posts = dc3Posts.posts.length > 3 ? dc3Posts.posts.slice(0,4) : dc3Posts.posts;
    }

    return {
      posts: posts.posts,
      featuredPost: featuredPost.posts,
      dc1Posts: dc1Posts ? dc1Posts : null,
      dc2Posts: dc2Posts ? dc2Posts : null,
      dc3Posts: dc3Posts ? dc3Posts : null,
    };
  }
</script>

<script>
  import RecentCarousel from "../components/RecentCarousel.svelte";
  import CatSlider from "../components/CatSlider.svelte";
  import CatCarousel from "../components/CatCarousel.svelte";
  import SvelteSeo from "svelte-seo";
  export let posts;
  export let featuredPost;
  export let dc1Posts;
  export let dc2Posts;
  export let dc3Posts;  

  let sliderPosts = [];

  if(posts.length > 3){
    sliderPosts = posts.slice(0,3);
  } else {
    sliderPosts = posts;
  }

</script>

<SvelteSeo
  title={metaTitle}
  description="{metaTitle} | {metaDescription}"
  openGraph={{
    title: metaTitle,
    description: `${metaTitle} | ${metaDescription}`,
    url: `${urls.BASE}`,
    type: "website",
  }}
/>

<CatSlider paginatedItems={sliderPosts} />

<section
  class="flex flex-wrap overflow-hidden lg:px-16 px-6"
>

<CatCarousel
  paginatedItems={featuredPost}
  title1="Featured articles"
  title2=""
/>

{#if dc1Posts.length > 0}
  <RecentCarousel
    paginatedItems={dc1Posts}
    title1="Recent articles from "
    title2="{displayCategory1}"
  />
{/if}

{#if dc2Posts.length > 0}
<RecentCarousel
  paginatedItems={dc2Posts}
  title1="Recent articles from "
  title2="{displayCategory2}"
/>
{/if}

{#if dc3Posts.length > 0}
<RecentCarousel
  paginatedItems={dc3Posts}
  title1="Recent articles from "
  title2="{displayCategory3}"
/>
{/if}

</section>