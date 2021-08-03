<script>
  export let title1 = '';
  export let title2 = '';
  export let blogdate = null;
  import moment from "moment";
  import { styling } from '../../wp-settings'
</script>

<div
  class="lg:px-16 px-6 py-4 text-center bg-gradient-to-r from-{styling.bgHero}-200 via-{styling.bgHero}-100 to-{styling.bgHero}-50"
>
  <h1
    class="mt-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl mb-4"
  >
    <span class="block inline italic text-{styling.secondaryColor}-900">{title1 ? title1 : ''}</span>
    <span class="block text-{styling.secondaryColor}-600 inline">{title2 ? title2 : ''}</span>
  </h1>
  {#if blogdate}
    <p class="text-md text-{styling.primeColor}">
      Posted at : {blogdate ? moment(blogdate).format("Do MMMM YYYY") : ""}
    </p>
    <!-- <p class="text-md text-white">Author By : Ninja Team</p> -->
  {/if}
</div>
