<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	<title>CMU.dev</title>
	<meta name="CMU.dev" content="A ScottyLabs webring" />
</svelte:head>

<section class="container">
	<h1>
		<span class="wordmark__mark">CMU.dev</span>
		<span class="wordmark__accent">CMU.developers</span>
		<!-- <span class="refresh"> (order refreshes every week) </span> -->
	</h1>
	<h2>
		A <a href="https://en.wikipedia.org/wiki/Webring" target="_blank">webring</a> for the tech talent
		@ Carnegie Mellon University, today and tomorrow
	</h2>

	<div class="row-container">
		{#each data.users as { name, url, affiliations } (url)}
			<div class="row">
				<div class="row__decoration"></div>
				<span>
					<a href={url} class="row__url">{url.replace(/https?:\/\//, '')}</a>
					<span class="row__affiliations">
						{affiliations
							.map((a) => {
								const majorString = Array.isArray(a.major) ? a.major.join(' + ') : a.major;
								return (
									a.type +
									', ' +
									majorString +
									" '" +
									(a.yearOfCompletion % 100).toString().padStart(2, '0')
								);
							})
							.join(' / ')}
					</span>
				</span>
			</div>{/each}
		<div class="row row--last">
			CMU Student or Alum? Add your site&nbsp;
			<a href="https://github.com/ScottyLabs/CMU-loopback">here!</a>
		</div>
	</div>
</section>

<style>
	section {
		font-family: var(--font-sans);
	}
	h1 {
		margin-top: 70px;
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 0;
		color: var(--green-400);
		position: relative;
	}
	@property --reveal-amt {
		syntax: '<percentage>';
		initial-value: 0%;
		inherits: false;
	}

	.wordmark__mark {
		position: absolute;
		left: 0;
		top: -0.2em;
		background-color: var(--green-400);
		color: var(--gray-950);
		padding-top: 0.2em;
		mask-image: linear-gradient(
			to right,
			black 0%,
			black var(--reveal-amt),
			transparent var(--reveal-amt)
		);
		animation: 1s reveal forwards cubic-bezier(0, 0, 0.06, 0.99);
		animation-delay: 0.3s;
	}
	@keyframes reveal {
		100% {
			--reveal-amt: 100%;
		}
	}

	h2 {
		font-size: 20px;
		font-weight: 300;
		max-width: 700px;
		line-height: 1.4;
		margin-top: 18px;
		color: var(--gray-100);
	}

	.row-container {
		margin-top: 45px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.row {
		position: relative;
		display: flex;
		font-size: 20px;
		.row__decoration {
			align-self: stretch;
			width: 4px;
			background-color: var(--green-400);
			margin-left: -10px;
			margin-right: 8px;
			opacity: 0;
			transition: 0.2s opacity;
		}

		.row__url {
			font-weight: 700;
			color: var(--gray-100);
			text-decoration: none;
			&:visited {
				color: var(--gray-400);
			}
		}
		.row__affiliations {
			margin-left: 6px;
			font-size: 16px;
			color: var(--gray-200);
		}
	}
	.row--last {
		margin-top: 6px;
		font-size: 16px;
		color: var(--gray-200);
	}
	@media screen and (width<=700px) {
		h1 {
			margin-top: 40px;
			font-size: 30px;
		}

		h2 {
			font-size: 20px;
		}
	}
</style>
