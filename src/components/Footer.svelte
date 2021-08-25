<script context="module">
  import Logo from "./Logo.svelte";
  import Socialbutton from "./Socialbutton.svelte";
  import { settings } from '../../wp-settings'
</script>

<footer class="bg-shades-50 body-font mb-0 text-left">
  <div class="flex flex-wrap px-12 py-5 items-center justify-center">
    <a
      href="."
      class="title-font font-medium text-shades-900"
    >
      <Logo />

    </a>
    <p
    class="text-sm text-shades-900 ml-4 sm:border-shades-200"
  >
    {settings.copyright}
  </p>
    <div class="flex mb-4 ml-4 text-right">
      <Socialbutton />
    </div>
  </div>
</footer>
