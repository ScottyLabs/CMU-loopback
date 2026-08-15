<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	<title>CMU.dev</title>
	<meta name="CMU.dev" content="A ScottyLabs webring" />
</svelte:head>

<h1 class="card__header">CMU.DEV</h1>
<h2 class="card__subtitle">
	A <a
		href="https://en.wikipedia.org/wiki/Webring"
		target="_blank"
		style="text-underline-offset: 3px;">webring</a
	> for the tech talent @ Carnegie Mellon University, today and tomorrow.
</h2>

<div class="row-container">
	{#each data.users as { name, url, affiliations }}
		<a class="row" href={`//${url}`}>
			<div class="row__url">{url} <span class="row__arrows">&nbsp;{'>'}</span></div>
			<div class="row__description">
				{name} -
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
			</div>
		</a>
	{/each}
</div>
<a href="https://github.com/ScottyLabs/CMU-loopback" class="join-row">
	++ CMU Student or Alum? Click here to add your site! ++
</a>
<div class="credits">
	Made with ♥︎ by <a href="https://scottylabs.org" target="_blank">ScottyLabs</a>
</div>

<style>
	.card__header {
		background-color: var(--card-bg-accent);
		font-family: var(--font-blocky);
		font-weight: 500;
		color: var(--card-bg);
		font-size: 53px;
		padding: 10px 0;
		text-align: center;
		position: sticky;
		top: 0;
	}

	.card__subtitle {
		font-family: var(--font-heading);
		color: var(--text);
		margin-block: 30px;
		font-size: 18px;
		font-weight: 300;
		padding-inline: var(--global-x-padding);
		line-height: 1.4;
	}
	.row-container {
		border-top: 1px solid var(--card-border);
	}
	.row {
		border-bottom: 1px solid var(--card-border);
		padding: 25px var(--global-x-padding);
		display: block;
		text-decoration: none;
		.row__arrows {
			display: inline-block;

			opacity: 0;
			transform: translate(-7px, 0);
			transition: 0.2s all;
		}
		&:hover {
			.row__arrows {
				opacity: 1;
				transform: translate(0, 0);
			}
		}

		.row__url {
			font-family: var(--font-heading);
			color: var(--text-accent);
			font-size: 20px;
			font-weight: 700;
			text-decoration: none;
		}
		.row__description {
			font-family: var(--font-text);
			margin-top: 10px;
			font-size: 16px;
			color: var(--text);
		}
	}
	.join-row {
		border-top: 1px solid var(--card-border);
		border-bottom: 1px solid var(--card-border);
		padding: 20px var(--global-x-padding);
		display: block;
		margin-top: 40px;
		text-align: center;
		font-size: 16px;
		font-family: var(--font-heading);
		color: var(--text-muted);
		text-decoration: none;
		&:hover {
			color: var(--text);
		}
	}
	.credits {
		display: none;
		font-size: 18px;
		font-family: var(--font-handwritten);
		text-align: center;
		margin-top: 40px;
		color: var(--text);
	}
	@media screen and (width<=1000px) {
		.credits {
			display: block;
		}
	}
</style>
