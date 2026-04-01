<script lang="ts">
	import './layout.css';
	import decorImg from '$lib/images/decor.png';

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>

	<footer>
		<div class="container">
			<p>
				Made with ❤️ by <a href="https://scottylabs.org" target="_blank">ScottyLabs</a>
			</p>
		</div>
	</footer>
	<img src={decorImg} alt="" class="decoration" />
</div>

<style>
	main {
		flex-grow: 1;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: max(300px, 100vh);
		position: relative;
		gap: 20px;
	}
	footer {
		font-family: 'Fira Mono';
		padding: 20px 0;
		font-size: 18px;
	}

	.decoration {
		position: absolute;
		bottom: 0;
		right: 0;
		height: min(50%, 400px);
	}
	@media screen and (width<=800px) {
		footer {
			font-size: 16px;
		}
	}
	@media screen and (width<=400px) {
		.decoration {
			right: -150px;
		}
	}
</style>
