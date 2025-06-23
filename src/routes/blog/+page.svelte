<script>
    let { data } = $props();
</script>

<h1 class="text-center text-yellow-400 font-bold text-4xl mb-8">Blog</h1>
<hr class="w-full max-w-md border-t-2 border-dashed border-yellow-400 mx-auto mb-6" />

<ul class="flex flex-col items-center gap-4">
    {#each data.summaries as { slug, title, date }}
        <li>
            <a 
                href={`/blog/${slug}`}
                class="text-white text-lg hover:text-yellow-400 transition"
            >
                > [{date}] : : {title}
            </a>
        </li>
    {/each}
</ul>
