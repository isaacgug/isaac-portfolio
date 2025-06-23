<script>
	let { children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>
</div>
