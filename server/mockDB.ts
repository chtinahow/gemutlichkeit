export type PersonDetails = any;
export const mockPersonDB: Record<number, PersonDetails> = {
	1: {
		id: 1,
		name: 'Tina Howard',
		pronouns: 'She/Her',
		location: 'Burlington, MA',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Tina%20Howard',
		lastMeetupDate: '2020-07-15',
	},
	2: {
		id: 2,
		name: 'Jesse Jurman',
		pronouns: 'He/Him',
		location: 'Burlington, MA',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman',
		lastMeetupDate: '2024-07-15',
	},
	3: {
		id: 3,
		name: 'Katie Walker',
		pronouns: 'She/Her',
		location: 'Laurel, MD',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Katie%20Walker',
		lastMeetupDate: '2025-12-15',
	},
	4: {
		id: 4,
		name: 'Jackie Dubin',
		pronouns: 'She/Her',
		location: 'Falls Church, VA',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Jackie%20Dubin',
		lastMeetupDate: '2025-11-15',
	},
	5: {
		id: 5,
		name: 'Bill Tarr',
		pronouns: 'He/Him',
		location: 'Cambridge, MA',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Bill%20Tarr',
		lastMeetupDate: '2026-01-17',
	},
	6: {
		id: 6,
		name: 'Marina Gela',
		pronouns: 'She/Her',
		location: 'Cambridge, MA',
		avatarURL: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Marina%20Gela',
		lastMeetupDate: '2026-01-24',
	},
};

export type EventDetails = any;
export const mockEventDB: Record<number, EventDetails> = {
	1: {
		id: 1,
		title: 'Halloween bash 2025',
		date: '2020-10-31',
		inviteeIds: [1, 2, 5, 3, 4],
	},
	2: {
		id: 2,
		title: 'House Warming Party',
		date: '2026-05-15',
		inviteeIds: [4, 5, 6, 1, 2, 3],
	},
	3: {
		id: 3,
		title: 'Wine Tasting',
		date: '2026-03-05',
		inviteeIds: [2, 3],
	},
};
