<script>
    export let author;
    import ImageLoader from "./image/ImageLoader.svelte";
</script>


  
  <div class="inline-flex items-center w-full author-bio bg-shades-100 mt-8 p-6">
    <ImageLoader src={author.entry[0].thumbnailUrl} alt={author.entry[0].displayName} class="w-16 h-16 rounded-3xl mt-6 " ></ImageLoader>
    <p class="text-xs flex-col pl-4 ">
      Hi, {author.entry[0].aboutMe}
      <!-- You can follow me on 
      {#each author.entry[0].urls as url}
        <a href={url.value} alt={url.title}> {url.title} </a>
        , 
      {/each} -->
    </p>
  </div>
  
