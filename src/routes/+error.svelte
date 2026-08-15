<script>
	import { page } from '$app/state';
	import bocchi from '../lib/images/boccher.png';
</script>

<div class="error">
	<h1>{page.status}</h1>
	<h2>{page.error?.message}</h2>
	<img src={bocchi} alt="" />
</div>

<style>
	.error {
		text-align: center;
		padding: 30px var(--global-x-padding);
		font-family: var(--font-blocky);
		img {
			margin-top: 20px;
			width: 160px;
			max-width: 80%;
		}
	}
	h1 {
		font-size: 150px;
		color: var(--text);
	}
	h2 {
		font-size: 30px;
		color: var(--text-muted);
	}
</style>
