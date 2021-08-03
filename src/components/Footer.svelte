<script context="module">
  import Logo from "./Logo.svelte";
  import Socialbutton from "./Socialbutton.svelte";
  import { settings, styling } from '../../wp-settings'
</script>

<footer class="text-white bg-{styling.bgHero}-50 body-font mb-0">
  <div class="flex flex-wrap px-12 py-5 items-center justify-center">
    <a
      href="."
      class="title-font font-medium text-gray-900"
    >
      <Logo />

    </a>
    <p
    class="text-sm text-gray-500 ml-4 sm:border-gray-200"
  >
    {settings.copyright}
  </p>
    <div class="flex mb-4 ml-4 text-right">
      <Socialbutton />
    </div>
  </div>
</footer>
