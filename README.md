# CMU Loopback

## ScottyLabs' first webring!

Want to join the CMU webring? Add the following snippet somewhere on your homepage and add your site info to `src/lib/links.ts`. Submit a PR when you're ready.

```html
<div>
	<a href="https://loopback.scottylabs.org/redirect?site=[the url you put into links.ts]&dir=prev"
		>←</a
	>
	<a href="https://loopback.scottylabs.org" style="color: [ADD A COLOR HERE]">
		<img src="https://loopback.scottylabs.org/webring-transparent.svg" alt="" />
	</a>
	<a href="https://loopback.scottylabs.org/redirect?site=[the url you put into links.ts]&dir=next"
		>→</a
	>
</div>
```

## Local development

`pnpm i`
`pnpm dev`

This project uses Svelte, because it's honestly kinda goated for small-scale projects like this one.
