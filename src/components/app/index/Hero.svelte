<script>
	import ToolHome from '$assets/tool-home.png';
</script>

<section
	id="hero"
	class="row-start-3 row-span-5 flex flex-col-reverse justify-center md:flex-row md:grid md:grid-cols-12"
>
	<div class="flex flex-col items-center justify-center md:justify-start md:col-span-4">
		<h1 class="text-3xl md:text-5xl">
			Welcome to <br /><span class="text-heading1 font-bold text-4xl md:text-6xl"> SE Tools </span>
		</h1>
		<h3 class="text-center w-screen text-gray-200 px-6 py-2 md:w-72 md:text-justify md:p-1">
			Increase your productivity by trying out the various tools used by almost all Software
			Engineers in the world! This is still at the early development so expect things to be minimal
			at first.
		</h3>
		<a href="/tools">
			<button
				id="get-started"
				class="bg-default_button text-green-800 text-lg px-4 py-1 my-1 rounded-full hover:text-green-50 hover:bg-green-600 active:text-green-50 active:bg-green-700 md:my-2 md:text-xl"
			>
				Get started
			</button>
		</a>
	</div>
	<div class="md:ml-10 md:col-span-8">
		<img src={ToolHome} alt="tools" width="700" height="350" />
	</div>
</section>
