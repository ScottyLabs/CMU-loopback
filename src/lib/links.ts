import Rand from 'rand-seed';

// If you have multiple majors, leave them in an array!
const users: UserLink[] = (
	[
		{
			name: 'Eric Xu',
			url: 'https://cirex.dev',
			affiliations: [
				{
					type: 'Undergrad',
					major: 'CS',
					yearOfCompletion: 2027
				}
			]
		},
		{
			name: 'Anish Pallati',
			url: 'anish.land',
			affiliations: [
				{
					type: 'Undergrad',
					major: 'Math',
					yearOfCompletion: 2028
				}
			]
		},
		{
			name: 'Mark Fan',
			url: 'https://arom1a.com',
			affiliations: [
				{
					type: 'Undergrad',
					major: ['CS', 'Math'],
					yearOfCompletion: 2029
				}
			]
		}
	] satisfies UserLink[]
).map((user) => ({ ...user, url: user.url.replace(/https?:\/\//, '') }));

const MS_IN_DAY = 1000 * 60 * 60 * 24;
/**
 * Shuffles users based on deterministic seed that updates once per day.
 */
function shuffleUsers() {
	const seed = Math.floor(+new Date() / MS_IN_DAY).toString();
	const randGenerator = new Rand(seed);

	const randomizedUsers = [...users]; // we don't want to mutate the original ordering
	for (let i = 0; i < randomizedUsers.length; i++) {
		let j = Math.floor(randGenerator.next() * (randomizedUsers.length - i)) + i;
		[randomizedUsers[i], randomizedUsers[j]] = [randomizedUsers[j], randomizedUsers[i]];
	}
	return randomizedUsers;
}

export function getUsers() {
	return shuffleUsers();
}
