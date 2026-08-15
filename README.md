# CMU Loopback

## ScottyLabs' first webring!

Want to join the CMU webring? Add the following snippet somewhere on your homepage and add your site info to `src/lib/links.ts`. Submit a PR when you're ready.

```html
<div>
	<a href="https://loopback.scottylabs.org/redirect?site=[the url you put into links.ts]&dir=prev"
		>←</a
	>
	<a href="https://loopback.scottylabs.org">
		<img src="https://loopback.scottylabs.org/icon.svg" alt="" />
	</a>
	<a href="https://loopback.scottylabs.org/redirect?site=[the url you put into links.ts]&dir=next"
		>→</a
	>
</div>
```

THe icon endpoint returns an svg, whose color and style can be customized with query parameters.

eg.

`https://loopback.scottylabs.org/icon.svg?color=AAAAAA`

OR

`https://loopback.scottylabs.org/icon.svg?color=AAAAAA&condensed=true`

## Local development

`pnpm i`
`pnpm dev`

This project uses Svelte, because it's honestly kinda goated for small-scale projects like this one.
