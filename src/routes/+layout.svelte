<script lang="ts">
	import './layout.css';
	import ringsImg from '$lib/images/ring2.png';

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
	<img src={ringsImg} alt="" aria-hidden="true" class="decoration" />
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
		overflow: hidden;
		gap: 20px;
	}
	footer {
		font-family: var(--font-sans);
		opacity: 0.7;
		padding: 20px 0;
		font-size: 18px;
	}

	.decoration {
		position: fixed;
		bottom: 70px;
		right: 100px;
		width: 130vw;
		pointer-events: none;
		user-select: none;
		z-index: -1;
		transform: translate(50%, 50%) scale(1.1) rotate3d(1, 0, 0, 75deg)
			rotate(calc(var(--ring-rotate) * 0.1));
		background-color: rgba(93, 217, 136, 0.483);
		border-radius: 100%;
		animation: 100s linear rotate -7s infinite;
		mask-image: conic-gradient(
			from calc(-1 * var(--ring-rotate) - 100deg),
			rgba(0, 0, 0, 0.581),
			transparent 100%
		);
	}
	@property --ring-rotate {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
	@keyframes rotate {
		to {
			--ring-rotate: 3600deg;
		}
	}

	@media screen and (width<=800px) {
		footer {
			font-size: 16px;
		}
	}
	@media screen and (width<=450px) {
		.decoration {
			right: 50%;
			bottom: 20%;
			transform: translate(50%, 50%) scale(1.1) rotate(calc(var(--ring-rotate) * 0.1));
			opacity: 0.5;
		}
	}
</style>
