<script context="module">
  import { urls, settings } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    console.log("p", query.s);
    const res = await this.fetch(`${urls.POST}/?search=${query.s}`);
    if (res.status !== 200) {
      return this.error(404, 'Not found');
    }
    const data = await res.json();

    const catres = await this.fetch(urls.CATEGORIES);
    if (catres.status !== 200) {
      return this.error(404, 'Not found');
    }
    const catmenu = await catres.json();

    return {
      posts: data,
      title: query.s,
      catmenu,
    };
  }
</script>

<script>
  import Grid from "../../components/Grid.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import TitleHero from "../../components/TitleHero.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import SvelteSeo from "svelte-seo";
  import { styling } from '../../../wp-settings'

  export let posts;
  export let title;
  export let catmenu;
  $: items = posts.posts;
  let currentPage = 1;
  let pageSize = settings.POSTPERPAGE;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<SvelteSeo
  title="Searching for {title}"
  description="you have searched for {title}"
  openGraph={{
    title: `Searching for ${title}`,
    description: `you have searched for ${title}`,
    url: `${urls.BASE}search?s=/${title}`,
    type: "website",
  }}
/>

{#if paginatedItems.length === 0}

<section id="articles"
class="flex flex-wrap mx-2 overflow-hidden my-4 sm:mx-2 md:mx-4 lg:mx-4 xl:mx-4"
>
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-12">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-{styling.secondaryColor}-900">No Results found</h1>
  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Please go back to home page</p>
  <a href="." class="p-2 w-full my-4">
    <button class="flex mx-auto text-white bg-{styling.primeColor} border-0 py-2 px-8 focus:outline-none hover:bg-{styling.primeColorws}-600 rounded text-lg">Home</button>
  </a>
  </div>
 
</div>
</section>


{:else}


<TitleHero title1="You have searched for" title2={title} />
<section
  class="flex flex-wrap overflow-hidden"
>
<div
class="lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:w-full md:my-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:w-2/3"
>
<Grid {paginatedItems} />
<div class="flex mx-auto">
  {#if items.length > settings.POSTPERPAGE }
    <div class="m-8">
      <LightPaginationNav
        totalItems={items.length}
        {pageSize}
        {currentPage}
        limit={1}
        showStepOptions={true}
        on:setPage={(e) => (currentPage = e.detail.page)}
      />
    </div>
  {/if}
</div>
</div>
<div
    class="container my-8 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar {catmenu}/>
  </div>
</section>

{/if}