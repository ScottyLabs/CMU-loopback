import { getUsers } from '$lib/links';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return { users: getUsers() };
};
