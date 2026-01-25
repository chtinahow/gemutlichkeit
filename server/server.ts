import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';
import home from '../screens/home';
import event from '../screens/event';
import personAssociation from '../screens/person-association';
import person from '../screens/person';
import { mockPersonDB, mockEventDB, PersonDetails } from './mockDB';

const app = new Elysia()
	.use(staticPlugin())
	.use(html())
	.get('/', () => {
		const events = Object.values(mockEventDB);
		const friends = Object.values(mockPersonDB);
		const eventInvitees: Record<number, PersonDetails[]> = {};
		events.forEach((event) => {
			eventInvitees[event.id] = event.inviteeIds.map((inviteeId: number) => mockPersonDB[inviteeId]);
		});
		return home(events, friends, eventInvitees);
	})
	.get('/event/:id', ({ params }) => {
		const eventId = parseInt(params.id);
		const eventDetails = mockEventDB[eventId];
		if (eventDetails === undefined) {
			return '404';
		}
		const invitees = eventDetails.inviteeIds.map((inviteeId: number) => mockPersonDB[inviteeId]);
		return event(eventDetails, invitees);
	})
	.get('/person-association', personAssociation)
	.get('/person/:id', ({ params }) => {
		const personId = parseInt(params.id);
		const personDetails = mockPersonDB[personId];
		if (personDetails === undefined) {
			return '404';
		}
		return person(personDetails);
	})
	.listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
