// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface UserLink {
		name: string;
		/** Important to put https:// before */
		url: string;
		affiliations: [Affiliation, ...Affiliation[]]; // require non-empty
	}
	interface Affiliation {
		type: 'undergrad' | 'phd' | 'masters';
		yearOfCompletion: number;
		major: string | string[]; // string[] for all you tryhards
	}
}

export {};
