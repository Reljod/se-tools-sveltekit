<script lang="ts">
	export let id: string = '';
	export let onClick = () => {};
</script>

<button
	{id}
	on:click={onClick}
	type="button"
	class="bg-green-800 hover:bg-lime-700 text-xl rounded-lg px-2 py-1 mx-1 my-1 w-full"
>
	<slot />
</button>
