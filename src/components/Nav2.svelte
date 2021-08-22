<script>
  // Menu Source: https://github.com/justalever/tailwind-navbar/blob/master/public/index.html
  import Navli from "../components/Navli.svelte";
  import Logo from "../components/Logo.svelte";
  export let segment;
  export let isOpen = true;
  export let catmenu;

  import { goto } from "@sapper/app";

  let searchTerm = "";

  const handleSubmit = () => {
    // there should be some parsing before putting it in the url, but it's not the subject
    goto(`/search?s=${searchTerm}`);
    searchTerm = "";
  };

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<header
  class="lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2"
>
  <Logo />

  <label
    for="menu-toggle"
    class="pointer-cursor lg:hidden block"
    on:click={toggleNav}
    ><svg
      class="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      ><title>menu</title><path
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
      /></svg
    ></label
  >
  <input class={isOpen ? "hidden" : ""} type="hidden" id="menu-toggle" />

  <div
    class="{isOpen ? 'hidden' : ''} lg:flex lg:items-center lg:w-auto w-full"
    id="menu"
  >
    <nav>
      <ul
        class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
      >
        <li on:click={toggleNav}>
          <Navli
            text="Home"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-pink-400"
            linkk="."
            {segment}
          />
        </li>
        {#each catmenu.categories as cat}
          {#if !(`${cat.slug}` === "uncategorized") && !(`${cat.slug}` === "featured")}
            <li on:click={toggleNav}>
              <Navli
                text={cat.name}
                classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-pink-400"
                linkk="/categories/{cat.slug}"
                {segment}
              />
            </li>
          {/if}
        {/each}
        <li on:click={toggleNav}>
          <Navli
            text="Contact"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-pink-400"
            linkk="contact"
            {segment}
          />
        </li>
        <li>
          <div class="relative flex w-full flex-wrap items-stretch mb-0">
            <form on:submit|preventDefault={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                bind:value={searchTerm}
                class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />

              <span
                class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1"
              >
                <svg
                  class="h-4 w-4 text-pink-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" /></svg
                >
              </span>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>
