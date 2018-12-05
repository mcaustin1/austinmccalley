<template>
	<div class="main">
		<h1>Austin McCalley</h1>

		<div class="center vertically-center">
			<button class="btn">GitHub</button>
			<button class="btn">UNJD</button>
			<button class="btn">HS2</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Montserrat');

	html,
	body {
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
	}

	.main {
		font-family: 'Montserrat', sans-serif;
	}

	h1 {
		color: #fff;
		font-size: 2em;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.vertical-center {
		margin: 0;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	.btn {
		border: 2px solid #ffffff;
		background-color: #141414;
		color: #ffffff;
		padding: 14px 28px;
		font-size: 16px;
		cursor: pointer;
		margin-right: 10px;
	}

</style>
