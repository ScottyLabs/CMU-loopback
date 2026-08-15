import icon from '../../lib/images/webring1.svg?raw';
import iconDense from '../../lib/images/webring2.svg?raw';
export function GET({ url }) {
	const unsafeColor = url.searchParams.get('color') ?? '';
	const condensed = url.searchParams.get('condensed') === 'true';
	const color = /^[0-9a-f]{2,6}$/i.test(unsafeColor) ? `#${unsafeColor}` : 'black';

	return new Response(
		(condensed ? iconDense : icon).replaceAll('fill="black"', `fill="${color}"`),
		{
			headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=3600' }
		}
	);
}
