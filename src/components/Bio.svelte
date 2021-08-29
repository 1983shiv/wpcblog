<script>
    export let author;
</script>


  
  <div class="flex flex-wrap w-full author-bio bg-shades-100 mt-8 justify-items-center text-left p-6">
    <img src={author.entry[0].thumbnailUrl} alt={author.entry[0].displayName} class="w-16 h-16 rounded-3xl mt-4">
    <p class="text-xs">
      Hi, <br />
      {author.entry[0].aboutMe}
      <!-- You can follow me on 
      {#each author.entry[0].urls as url}
        <a href={url.value} alt={url.title}> {url.title} </a>
        , 
      {/each} -->
    </p>
  </div>
  
