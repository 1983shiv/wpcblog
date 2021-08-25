<script>

  import moment from "moment";
  export let title = '';
  export let date = '';
  // export let excerpt = '';
  export let imgsrc;
  // export let left = true;
  export let cats;
  export let slug  = '';
  let categories = Object.keys(cats);

</script>

<div class="w-full cover my-4">
  <div class="shadow rounded-lg overflow-hidden">
    <a class="mt-2" href="articles/{slug}" {title}>
      <img
        class="w-full object-cover object-center overflow-hidden min-h-60 max-h-60"
        src={imgsrc ? imgsrc : ''}
        alt={title ? title : ''}
        width="200px"
        height="120px"
      />
    </a>
    <div class="p-6">
      <a class="mt-2" href="articles/{slug}" {title}>
        <h1 class="title-font text-lg font-medium text-shades-900 mb-3">
          {title ? title : ''}
        </h1>
      </a>
      <h4
        class="tracking-widest text-xs title-font font-medium text-shades-400 mb-1"
      >
        <!-- <Tags {tags} /> -->
      </h4>
      <p class="leading-relaxed mb-3">
        { date ? moment(date).format("Do MMMM YYYY") : ""}
      </p>
      {#each (categories ? categories : '') as cat}
        <span
          class="text-xs font-semibold inline-block py-1 px-2 rounded text-main-500 bg-shades-100 uppercase last:mr-0 mr-1"
        >
          <a href="categories/{cat.toString().toLowerCase()}">{cat}</a>
        </span>
      {/each}

      <!-- <div class="flex items-center flex-wrap ">
        <a
          href="articles/{slug ? slug : ''}"
          class="text-{styling.primeColor}-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div> -->
    </div>
  </div>
</div>
