<script lang="ts">
	import './layout.css';
	import cirex from '../lib/images/shijima_1.png';
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>
<div class="circle-decor"></div>
<div class="infinite-scroll infinite-scroll--top">
	<div class="infinite-scroll__content">
		{#each Array(90)}<span
				><span style="color: var(--card-bg)">CMU.dev</span><span
					style="color: var(--card-bg-accent)">elopers</span
				></span
			>{/each}
	</div>
</div>
<div class="infinite-scroll infinite-scroll--bottom">
	<div class="infinite-scroll__content">
		{#each Array(90)}<span
				><span style="color: var(--card-bg)">CMU.dev</span><span
					style="color: var(--card-bg-accent)">elopers</span
				></span
			>{/each}
	</div>
	<footer>
		<div>
			<p>
				Made with ♥︎ by <a href="https://scottylabs.org" target="_blank">ScottyLabs</a>
			</p>
		</div>
		<!-- <div style="display: flex; align-items: flex-end; gap: 5px">
			<p>Designed by cirex</p>
			<a href="https://cirex.dev">
				<img src={cirex} class="cirex" alt="dweeb" />
			</a>
		</div> -->
	</footer>
</div>

<style>
	/* z-index -1 is reserved for main::before and main::after (see layout.css), so all negative z-indices should be smaller than this  */
	footer {
		font-size: 18px;
		align-items: flex-end;
		position: absolute;

		top: 0;
		transform: translate(0, -100%);
		left: 20px;
		right: 20px;
		padding-bottom: 1px;
		font-family: var(--font-handwritten);
		color: var(--bg-stroke);
		z-index: -5;
		display: flex;
		justify-content: space-between;
		p {
			padding-bottom: 10px;
		}

		.cirex {
			width: 50px;
			height: 70px;
			display: block;
		}
	}
	.circle-decor {
		position: fixed;
		inset: 0;
		background-image: url('../lib/images/circle.svg');
		z-index: -200;
	}
	.infinite-scroll {
		--gap: 15px;
		--scroll-duration: 120.67s;
		position: fixed;
		background-color: var(--bg);

		left: 0;
		right: 0;
		font-family: var(--font-blocky);

		z-index: -100;
		display: flex;
		& > .infinite-scroll__content {
			flex-shrink: 0;
			display: flex;
			padding-block: 7px;
			font-weight: 500;
			font-size: 18px;
			gap: var(--gap);
		}

		&.infinite-scroll--top {
			top: 0;
			border-bottom: 1px solid var(--card-bg);
			& > .infinite-scroll__content {
				animation: slide var(--scroll-duration) infinite linear;
				padding-top: 9px;
			}
		}
		&.infinite-scroll--bottom {
			bottom: 0;
			border-top: 1px solid var(--card-bg);

			& > .infinite-scroll__content {
				animation: slide var(--scroll-duration) infinite linear reverse;
				padding-bottom: 9px;
			}
		}
	}
	@keyframes slide {
		to {
			transform: translate(calc(-50% - var(--gap) / 2), 0);
		}
	}
</style>
