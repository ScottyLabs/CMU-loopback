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
		/** url without the https:// (when inputting manually, can choose to add or omit) */
		url: string;
		affiliations: [Affiliation, ...Affiliation[]]; // require non-empty
	}
	interface Affiliation {
		type: 'Undergrad' | 'PhD' | 'Masters';
		yearOfCompletion: number;
		major: string | string[];
	}
}

export {};
