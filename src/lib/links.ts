const users: UserLink[] = [
	{
		name: 'Eric Xu',
		url: 'https://cirex.dev',
		affiliations: [
			{
				type: 'undergrad',
				major: 'CS',
				yearOfCompletion: 2027
			}
		]
	},
	{
		name: 'Anish Pallati',
		url: 'https://anish.land',
		affiliations: [
			{
				type: 'undergrad',
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
				type: 'undergrad',
				major: 'CS & Math',
				yearOfCompletion: 2029
			}
		]
	}
];
// state in a stateless backend? how peculiar. I must inquire about this further with my manager with haste!
const usersOrdered = users;
let lastShuffledTimestamp = 0;
const shuffleInterval = 1000 * 60 * 60 * 24; // 1 day
/**
 * Shuffles users if that last shuffle happened over a day ago
 */
function shuffleUsers() {
	if (Date.now() - lastShuffledTimestamp < shuffleInterval) {
		return;
	}
	for (let i = 0; i < usersOrdered.length; i++) {
		let j = Math.floor(Math.random() * (usersOrdered.length - i)) + i;
		[usersOrdered[i], usersOrdered[j]] = [usersOrdered[j], usersOrdered[i]];
	}
	lastShuffledTimestamp = Date.now();
}

export function getUsers() {
	shuffleUsers();
	return usersOrdered;
}
