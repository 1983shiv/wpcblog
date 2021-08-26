<script>
    import { featuredHero, featuredTitle } from "../../wp-settings"
    import mf from '../node_modules/images/mf.jpg'

</script>

<!-- <div class="rounded bg-white border-shades-200 shadow-md overflow-hidden relative hover:shadow-lg"> -->
<div>
    <a href={featuredHero} rel=preload alt={featuredTitle}>
        <img
            src={mf}
            alt="stew"
            width="1400px"
            height="auto"
            class="h-48 md:h-96 w-full object-cover sliderimg"
        />
    </a>
</div>