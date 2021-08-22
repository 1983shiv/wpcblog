<!-- <script context="module" ✂prettier:content✂="CiAgLy8gaW1wb3J0IHsgZmluZEJ5VGFnIH0gZnJvbSAiQC9wb3N0cyI7CiAgaW1wb3J0IHsgcG9zdHMgfSBmcm9tICJAL3Bvc3RzLmpzIjsKCiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkgewogICAgLy8gY29uc3QgeyB0YWcgfSA9IHBhZ2UucGFyYW1zOwogICAgLy8gY29uc3QgcG9zdHMgPSBmaW5kQnlUYWcodGFnKTsKCiAgICBsZXQgdGFncyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gcG9zdC50YWdzKTsKICAgIGNvbnNvbGUubG9nKCJ0YWdzICIsIHRhZ3MpOwoKICAgIHJldHVybiB7IHRhZ3MgfTsKICB9Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  export let catmenu;
  
  
</script>

<div class="m-4 p-8 shadow flex flex-wrap">
  <h2
    class="bg-pink-500 text-white rounded p-2 text-xl text-bold shadow w-full mb-4"
  >
    Stack
  </h2>
  {#each catmenu.categories as cat}
    {#if !(`${cat.slug}` === "uncategorized")}
      <a
        prefetch
        href={`/categories/${cat.slug}`}
        title={cat.name}
        class="p-2 hover:p-4 hover:translate-x-2 hover:bg-gray-50">#{cat.name}
      </a>
    {/if}
  {/each}
  
</div>

