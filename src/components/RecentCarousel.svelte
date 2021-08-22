<script>
    import Carousel from "@beyonk/svelte-carousel";
    import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
    import Card from "./Card.svelte";
    export let paginatedItems;
    export let title1;
    export let title2;
    
  
  </script>
  
  <div
    class="lg:px-6 px-6 py-4 w-full"
  >
    <h1
      class="mt-4 text-2xl tracking-tight font-extrabold text-pink-500 sm:text-2xl md:text-2xl mb-8 border-b-4 border-gray-800"
    >
      <span class="inline italic">{title1}</span>
      <span class="inline text-gray-600 ">{title2}</span>
    </h1>
  </div>
  
  <Carousel autoplay={30000} perPage={{ 900: 3, 649: 2 }}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    {#each paginatedItems as item, i}
      <div class="slide-content mx-2">
        
        <Card
          title={item.title}
          date={item.date}
          slug={item.slug}
          imgsrc={item.featured_image}
          cats={item.categories}
        />
        
      </div>
    {/each}
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
  