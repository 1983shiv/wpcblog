<script>
  export let title1 = '';
  export let title2 = '';
  export let blogdate = null;
  import moment from "moment";
  
</script>

<div
  class="lg:px-16 px-6 py-4 text-center bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50"
>
  <h1
    class="mt-4 text-2xl tracking-tight font-extrabold text-shades-900 sm:text-2xl md:text-2xl mb-4"
  >
    <span class="block inline italic text-shades-900">{title1 ? title1 : ''}</span>
    <span class="block text-shades-600 inline">{title2 ? title2 : ''}</span>
  </h1>
  {#if blogdate}
    <p class="text-md text-main-500">
      Posted at : {blogdate ? moment(blogdate).format("Do MMMM YYYY") : ""}
    </p>
    <!-- <p class="text-md text-white">Author By : Ninja Team</p> -->
  {/if}
</div>
