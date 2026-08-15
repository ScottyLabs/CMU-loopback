import { getUsers } from '$lib/links';
import { redirect, error } from '@sveltejs/kit';

export function GET({ url }) {
	const startingURL = url.searchParams.get('site')?.replace(/https?:\/\//, '');
	const dir = url.searchParams.get('dir');
	const users = getUsers();
	const startIndex = users.findIndex((site) => site.url === startingURL);
	if (startIndex === -1) return error(404, 'Site is not part of webring!');

	return redirect(
		307, // do NOT cache redirect
		'https://' + users[(startIndex + (dir === 'next' ? 1 : -1) + users.length) % users.length].url
	);
}
