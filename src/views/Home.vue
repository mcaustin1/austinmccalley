<template>
	<div class="home">
		<Main />
	</div>
</template>

<style lang="scss">
	* {
		background-color: inherit;
	}

</style>

<script>
	// @ is an alias to /src
	import Main from '@/components/Main.vue'

	export default {
		name: 'home',
		components: {
			Main
		}
	}

</script>
