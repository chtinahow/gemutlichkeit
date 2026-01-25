import { EventDetails, PersonDetails } from '../server/mockDB';

export default (events: EventDetails[], friends: PersonDetails[], eventInvitees: Record<number, PersonDetails[]>) => {
	return /*html*/ `
<html lang="en">
	<head>
		<title>Gemütlichkeit</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />

		<!-- load web-awesome kit -->
		<script src="https://kit.webawesome.com/79755c32e4134acc.js" crossorigin="anonymous"></script>

		<!-- load web-awesome components that aren't immediately exposed -->
		<script type="module">
			import { discover } from 'https://unpkg.com/@awesome.me/webawesome@3/dist-cdn/webawesome.loader.js';

			discover(document.createElement('wa-avatar'));
			discover(document.createElement('wa-badge'));
			discover(document.createElement('wa-format-date'));
		</script>

		<!-- load scrollable cards component -->
		<script src="https://unpkg.com/scrollable-cards@1"></script>

		<!-- load components -->
		<script src="/public/components/person-card.js"></script>
		<script src="/public/components/event-card.js"></script>
		<script src="/public/components/event-invitee.js"></script>

		<!-- dark / light mode script -->
		<script src="/public/scripts/light-dark.js"></script>

		<link href="/public/styles/layout.css" rel="stylesheet" />
		<link href="/public/styles/sc-card.css" rel="stylesheet" />

		<!-- mobile page layout -->
		<style>
			h1 {
				text-align: center;
			}
		</style>
	</head>
	<body>
		<main>
			<h1>Gemütlichkeit</h1>

			<h2>Friends</h2>
			<sc-container>
					${friends
						.map(
							(invitee) => /*html*/ `
							<sc-card>
								<person-card
									name="${invitee.name}"
									personId="${invitee.id}"
									date="${invitee.lastMeetupDate}"
									avatar="${invitee.avatarURL}"
								></person-card>
							</sc-card>`,
						)
						.join('')}
			</sc-container>

			<h2>Events</h2>
			<sc-container>
				${events
					.map(
						(event) => /*html*/ `
							<sc-card>
								<event-card name="${event.title}" date="${event.date}" eventId="${event.id}">
									${eventInvitees[event.id]
										.map(
											(invitee) => /*html*/ `
												<event-invitee
													name="${invitee.name}"
													avatar="${invitee.avatarURL}"
												></event-invitee>
											`,
										)
										.join('')}
								</event-card>
							</sc-card>
							`,
					)
					.join('')}
			</sc-container>
		</main>
	</body>
</html>
	`;
};
