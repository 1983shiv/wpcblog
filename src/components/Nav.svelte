<!-- <script context="module" ✂prettier:content✂="CiAgaW1wb3J0IHsgdXJscyB9IGZyb20gIi4uLy4uL3dwLXNldHRpbmdzLmpzIjsKCiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7CiAgICBjb25zdCBhcGlVcmwgPSB1cmxzLkNBVEVHT1JZOwogICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaCgKICAgICAgImh0dHBzOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy8xOTUyMzEzMzcvY2F0ZWdvcmllcy8iCiAgICApOwogICAgY29uc3QgY2F0bWVudSA9IGF3YWl0IHJlcy5qc29uKCk7CiAgICAvLyBjb25zb2xlLmxvZygiaGVsbG8iLCBjYXRtZW51KTsKICAgIHJldHVybiB7IGNhdG1lbnUgfTsKICB9Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  export let catmenu;
  export let segment;
  
</script>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >home</a
      >
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === "blog" ? "page" : undefined}
        href="blog">blog</a
      >
    </li> -->
    
    {#each catmenu.categories as cat}
      {#if !(`${cat.slug}` === "uncategorized")}
        <li>
          <a
            rel="prefetch"
            aria-current={segment === `/categories/${cat.slug}`
              ? "page"
              : undefined}
            href="/categories/{cat.slug}">{cat.name}</a
          >
        </li>
      {/if}
    {/each}
    <li>
      <a aria-current={segment === "about" ? "page" : undefined} href="about"
        >Contact</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
