<script context="module">
  import { urls } from "../../wp-settings.js";

  export async function preload({ params }) {
    const res = await this.fetch(urls.CATEGORIES);
    if (res.status !== 200) {
      return this.error(404, 'Not found');
    }
    const catmenu = await res.json();
    return { catmenu };
  }
</script>

<script>
  import Nav2 from "../components/Nav2.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
  export let catmenu;
</script>

<!-- <div class="flex flex-col h-screen">
  <Nav2 {segment} {catmenu} />
  <div class="container px-5 py-8 mx-auto flex-grow">
    <slot />
  </div>
  <Footer />
</div> -->

<Nav2 {segment} {catmenu}/>
<slot />
<Footer />
