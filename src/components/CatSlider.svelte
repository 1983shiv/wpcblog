<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  export let paginatedItems;

  // https://svelte.dev/repl/70e61d6cc91345cdaca2db9b7077a941?version=3.41.0
  // export async function fetchImage(url) {
  //   if (process.browser){
  //     const response = await fetch(url, {
  //           mode: 'no-cors', // no-cors, *cors, same-origin,
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         }
  //       );
  //     const data = await response.json();
  //     return { data }
  //   }
	// }

  // const items = paginatedItems.map((item) => {
  //   const { featured_image } = item;
  //   const fetchImage = (async (featured_image ) => {
  //     if (process.browser){
  //       const response = await fetch(featured_image , {
  //           mode: 'no-cors', // no-cors, *cors, same-origin,
  //           headers: {
  //             'Content-Type': 'application/json'
  //           }
  //         }
  //       );
  //       return await response.json()
  //     }
  //   })()
  //   return { ...item, featured_image: fetchImage}
  // })
  // console.log('items', items)
</script>

<div class="relative mb-8">
  <Carousel autoplay={30000} perPage={1}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    {#each paginatedItems as item, i}
      <div class="slide-content text-center">
        <div
          class="rounded bg-white border-shades-200 shadow-md overflow-hidden relative hover:shadow-lg"
        >
        <a href="articles/{item.slug}">
          <img
            src={item.featured_image}
            alt="stew"
            class="h-48 md:h-96 w-full object-cover sliderimg"
          />
          
            <!--
            <div
              class="bg-main-600 py-4 px-8 bg-opacity-60 absolute vertical-center text-center text-shades-200 text-xs uppercase font-bold"
            >
               <svg
                class="h-4 w-4 md:h-8 md:w-8 inline-block  text-shades-50"
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
                <path
                  d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                />
                <path
                  d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                /> <line x1="16" y1="21" x2="16" y2="19" />
                <line x1="19" y1="16" x2="21" y2="16" />
                <line x1="3" y1="8" x2="5" y2="8" />
                <line x1="8" y1="3" x2="8" y2="5" /></svg
              >
              <span class="text-shades-50 font-bold md:text-4xl">{item.title}</span> 
            </div>-->
          </a>
        </div>
      </div>
    {/each}
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
</div>

<style>
@media screen and (min-width: 600px) {
.sliderimg{
    height: 500px;
  }
}
/* .vertical-center {
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translateY(-40%);
    transform: translateY(-40%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  } */
</style>
