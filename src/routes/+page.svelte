<script lang="ts">
	import decorImg from '$lib/images/decor.png';
	const { data } = $props();
</script>

<svelte:head>
	<title>CMU Loopback</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container">
	<h1>
		CMU<span style="color:var(--gray-600)">::</span><span style="color:var(--red-700)"
			>Loopback</span
		>
		<!-- <span class="refresh"> (order refreshes every week) </span> -->
	</h1>
	<h2>
		A <a href="https://en.wikipedia.org/wiki/Webring" target="_blank">webring</a> for the tech talent
		at Carnegie Mellon University, today and beyond
	</h2>

	<div class="row-container">
		{#each data.users as { name, url, affiliations } (url)}
			<div class="row">
				<div class="row__decoration"></div>
				<span>
					<a href={url} class="row__url">{url.replace(/https?:\/\//, '')}</a>
					<span class="row__affiliations">
						{affiliations
							.map(
								(a) =>
									a.type +
									', ' +
									a.major +
									" '" +
									(a.yearOfCompletion % 100).toString().padStart(2, '0')
							)
							.join(' / ')}
					</span>
				</span>
			</div>{/each}
		<div class="row row--last">
			<div class="row__decoration"></div>
			CMU Student or Alum? Add your site&nbsp;
			<a href="https://github.com/ScottyLabs/CMU-loopback">here!</a>
		</div>
	</div>
</section>
<img src={decorImg} alt="" class="decoration" />

<style>
	h1 {
		font-size: 40px;
		font-weight: 300;
		margin-top: 50px;
		font-family: var(--font-heading);
		margin-bottom: 0;
	}
	h2 {
		font-size: 22px;
		font-weight: 600;
		max-width: 700px;
		line-height: 1.5;
		margin-top: 15px;
		color: black;
	}
	.refresh {
		font-size: 16px;
		color: var(--gray-600);
	}
	.decoration {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 400px;
	}
	.row-container {
		margin-top: 50px;
		--line-width: 3px;
		border-left: var(--line-width) solid var(--gray-300);
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	.row {
		position: relative;
		display: flex;
		.row__decoration {
			margin-right: 15px;
			height: var(--line-width);
			width: 15px;
			background-color: var(--gray-300);
			align-self: center;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
		font-size: 18px;
		.row__url {
			font-weight: bold;
			color: var(--red-700);
			text-decoration: none;
			&:visited {
				color: var(--red-900);
			}
		}
		.row__affiliations {
			font-size: 16px;
			color: var(--gray-600);
		}
	}
	.row--last {
		font-size: 16px;
	}
</style>
