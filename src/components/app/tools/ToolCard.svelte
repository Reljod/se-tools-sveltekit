<script lang="ts">
	import ComingSoonImg from '$assets/coming-soon.png';

	export let link = '/';
	export let name = 'Coming Soon!';
	export let imageLink = ComingSoonImg;
</script>

<a href={link} class="w-fit">
	<button
		class="flex flex-col items-center justify-between h-36 sm:h-44 md:h-52 py-4 bg-default_button rounded-xl hover:bg-green-600 hover:ring-lime-300 hover:ring-2 shadow-lime-900 shadow-lg focus:bg-green-700 aspect-square"
	>
		<div class="inline-block w-3/5">
			<img src={imageLink} alt="tool" />
		</div>
		<h3 class="text-gray-800 text-sm sm:text-lg md:text-xl font-bold">{name}</h3>
	</button>
</a>
