<script>
    let { data } = $props();
</script>

<div class="mx-auto max-w-3xl pointer-events-auto">
    <div
        class="
            [&_a]:text-yellow-400 [&_a]:underline [&_a]:hover:text-yellow-300
            [&_h1]:text-center [&_h1]:text-yellow-400 [&_h1]:font-bold [&_h1]:text-4xl [&_h1]:mb-8
            [&_p]:text-white [&_p]:text-justify [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-4
			[&_hr]:my-8
        "
    >
        {@html data.post.content}
    </div>
</div>
