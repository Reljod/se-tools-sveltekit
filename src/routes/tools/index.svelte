<script>
	import StopWatchImg from '$assets/stopwatch.png';
	import ToolCard from '$components/app/tools/ToolCard.svelte';
</script>

<svelte:head>
	<title>Tools</title>
</svelte:head>
<section id="tools-grid" class="flex flex-col justify-center m-5 h-screen items-center">
	<h1 class="text-center text-primary font-bold text-3xl md:text-5xl">Tools</h1>
	<div
		class="grid grid-cols-2 gap-5 mb-4 mt-6 md:grid-cols-3 justify-center items-center place-content-center w-fit"
	>
		<ToolCard link="/tools/pomodoro" imageLink={StopWatchImg} name="Pomodoro App" />
		{#each Array(5) as _}
			<ToolCard />
		{/each}
	</div>
</section>
