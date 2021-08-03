<script>
  const layers = [0, 1, 2, 3];

  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="parallax-container" href=".">
  {#each [0, 1, 2, 3] as layer}
    <img
      style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px)"
      src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png"
      alt="parallax layer {layer}"
    />
  {/each}
  <slot />
</div>

<!-- <div class="text">
  <span style="opacity: {1 - Math.max(0, y / 40)}"> scroll down </span>

  <div class="foreground">
    You have scrolled {y} pixels
  </div>
</div> -->
<style>
  .parallax-container {
    position: fixed;
    width: 2400px;
    height: 312px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .parallax-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
  }

  .parallax-container img:last-child::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(45, 10, 13);
  }

  .text {
    position: relative;
    width: 100%;
    height: 70vh;
    color: rgb(220, 113, 43);
    text-align: center;
    padding: 4em 0.5em 0.5em 0.5em;
    box-sizing: border-box;
    pointer-events: none;
  }

  span {
    display: block;
    font-size: 1em;
    text-transform: uppercase;
    will-change: transform, opacity;
  }

  .foreground {
    position: absolute;
    top: 211px;
    left: 0;
    width: 100%;
    height: calc(100% - 712px);
    background-color: rgb(32, 0, 1);
    color: white;
    padding: 50vh 0 0 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: rgb(253, 174, 51);
  }
</style>
