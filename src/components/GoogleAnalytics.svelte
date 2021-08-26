<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
    $: {
      if (typeof gtag !== "undefined"){
        gtag("config", "G-13X0TJ6J8M", {
          page_path: $page.path
        });
      }
    }
  </script>