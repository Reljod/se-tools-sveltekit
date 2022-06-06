<script>
	import NavBar from '$components/layout/NavBar.svelte';
	import '../app.css';
</script>

<body class="bg-bgprimary text-primary">
	<NavBar />
	<main class="container md:mx-auto px-1 py-6 lg:p-6 max-h-full min-h-screen min-w-screen">
		<slot />
	</main>
</body>
