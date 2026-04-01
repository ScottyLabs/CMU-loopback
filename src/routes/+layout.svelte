<script lang="ts">
	import './layout.css';

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
</div>

<style>
	main {
		flex-grow: 1;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	footer {
		font-family: 'Fira Mono';
		padding: 20px 0;
	}
</style>
