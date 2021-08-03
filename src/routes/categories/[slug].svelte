<script context="module">
  import { urls, metaDescription, settings } from "../../../wp-settings.js";

  export async function preload({ params, query }) {
    const res = await this.fetch(`${urls.POST}/?category=${params.slug}`);
    
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
      title: params.slug,
      catmenu
    };
  }
</script>

<script>

import TitleHero from "../../components/TitleHero.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";
  import Grid from "../../components/Grid.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import SvelteSeo from "svelte-seo";

  export let posts;
  export let catmenu;
  export let title;
  $: items = posts.posts;
  let currentPage = 1;
  let pageSize = settings.POSTPERPAGE;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  // Convert API date to human readable
  const convertDate = (date) => {
    // Add your time zone to get accurate date
    let timezone = "PST";
    let nd = new Date(`${date} ${timezone}`);

    let prettyDate = nd.toLocaleDateString("en-EN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return prettyDate;
  };
</script>

<SvelteSeo
  title={title}
  description="{title} | {metaDescription}"
  openGraph={{
    title: title,
    description: `${title} | ${metaDescription}`,
    url: `${urls.BASE}category/${title}`,
    type: "website",
  }}
/>

<TitleHero title1="Articles from #" title2={title} />

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


 