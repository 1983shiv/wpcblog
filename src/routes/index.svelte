<script>
  // import RecentCarousel from "../components/RecentCarousel.svelte";
  // import CatSlider from "../components/CatSlider.svelte";
  // import CatCarousel from "../components/CatCarousel.svelte";
  import HomeGrid from "../components/HomeGrid.svelte";
  import FeaturedHero from "../components/FeaturedHero.svelte";
  import SvelteSeo from "svelte-seo";
  import { 
    urls, 
    metaTitle, 
    metaDescription } from "../../wp-settings.js";
  // import { 
  //   urls, 
  //   metaTitle, 
  //   metaDescription, 
  //   displayCategory1, 
  //   displayCategory2, 
  //   displayCategory3 } from "../../wp-settings.js";

  // let dc1Posts = {};
  // let dc2Posts = {};
  // let dc3Posts = {};
  let allPosts = [];
  

  async function getAllPosts() {
    if(process.browser){
      let res1 = await fetch(urls.POST);

      if (res1.status !== 200) {
        return this.error(404, 'Not found');
      }

      let posts = await res1.json();

      allPosts = posts.posts;
      return allPosts;
    }
  }

  // async function getPosts() {
  //   if(process.browser){
  //     let res1 = await fetch(urls.POST);

  //     if (res1.status !== 200) {
  //       return this.error(404, 'Not found');
  //     }

  //     let posts = await res1.json();

  //     let sliderPosts = [];

  //     if(posts.posts.length > 3){
  //       sliderPosts = posts.posts.slice(1,1);
  //     } else {
  //       sliderPosts = posts.posts;
  //     }

  //     return sliderPosts;
  //   }
  // }

  // async function getfeaturedcat() {
  //   if(process.browser){
  //     let res2 = await fetch(`${urls.POST}/?category=featured`);

  //     if (res2.status !== 200) {
  //       return this.error(404, 'Not found');
  //     }

  //     let featuredposts = await res2.json();
  //     featuredposts = featuredposts.posts;
  //     return featuredposts;
  //   }
  // }

  // async function getDisplayCategory1() {
  //   if(process.browser){
  //     const dc1 = await fetch(`${urls.POST}/?category=${displayCategory1}`);
  //     if (dc1.status !== 200) {
  //       return this.error(404, 'Not found');
  //     }
  //     dc1Posts = await dc1.json();
  //     dc1Posts = dc1Posts.posts.length > 3 ? dc1Posts.posts.slice(0,4) : dc1Posts.posts;
  //     return dc1Posts;
  //   }
  // }

  // async function getDisplayCategory2() {
  //   if(process.browser){
  //     const dc2 = await fetch(`${urls.POST}/?category=${displayCategory2}`);
  //     if (dc2.status !== 200) {
  //       return this.error(404, 'Not found');
  //     }
  //     dc2Posts = await dc2.json();
  //     dc2Posts = dc2Posts.posts.length > 3 ? dc2Posts.posts.slice(0,4) : dc2Posts.posts;
  //     return dc2Posts;
  //   }
  // }
  
  // async function getDisplayCategory3() {
  //   if(process.browser){
  //     const dc3 = await fetch(`${urls.POST}/?category=${displayCategory3}`);
  //     if (dc3.status !== 200) {
  //       return this.error(404, 'Not found');
  //     }
  //     dc3Posts = await dc3.json();
  //     dc3Posts = dc3Posts.posts.length > 3 ? dc3Posts.posts.slice(0,4) : dc3Posts.posts;
  //     return dc3Posts;
  //   }
  // }

  // const postPromise = getPosts();
  const allPostsPromise = getAllPosts();
  // const featuredCatPromise = getfeaturedcat();
  // const displayCategory1Promise = displayCategory1.length > 0 ? getDisplayCategory1() : [];
  // const displayCategory2Promise = displayCategory2.length > 0 ? getDisplayCategory2() : [];
  // const displayCategory3Promise = displayCategory3.length > 0 ? getDisplayCategory3() : [];
  

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

<FeaturedHero />

<!-- {#await postPromise}
  <p class="justify-center">Loading...</p>
{:then sliderPosts}
  <CatSlider paginatedItems={sliderPosts} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await} -->

<!-- <CatSlider paginatedItems={sliderPosts} /> -->

<!-- <section class="flex flex-wrap overflow-hidden lg:px-16 px-6">
  <HomeGrid paginatedItems={allPosts} />

</section> -->

{#await allPostsPromise}
  <p>Loading...</p>
{:then allPosts}
  <section class="flex flex-wrap overflow-hidden lg:px-16 px-6">
  <HomeGrid paginatedItems={allPosts} />

</section>

{:catch error}
  <p style="color: red">{error.message}</p>
{/await}