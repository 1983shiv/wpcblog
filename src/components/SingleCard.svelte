<script>
    export let post = [];
</script>

<div class="card hover:shadow-lg"> 
    <img src={post.featured_image} alt="stew" class="h-32 sm:h-48 w-full object-cover">
    <div class="m-4">
      <span class="font-bold">{post.title}</span>
      <span class="block text-gray-500 text-sm">{post.date}</span>
    </div>
    <div class="badge">
      <svg class="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>post.categories[0].title</span>
    </div>
</div>


<style>
.card{
  border-radius: 0.25rem;
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  --border-opacity: 1;
  border-color: #edf2f7;
  border-color: rgba(237, 242, 247, var(--border-opacity));
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: relative;
}

.badge{
  position: absolute;
  top: 0;
  margin-left: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  --bg-opacity: 1;
  background-color: #E2E2D5;
  background-color: rgba(226, 226, 213, var(--bg-opacity));
  --text-opacity: 1;
  color: #888883;
  color: rgba(136, 136, 131, var(--text-opacity));
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 9999px;
}

/* .btn{
  border-radius: 9999px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
} */
</style>