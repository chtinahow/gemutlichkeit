import { EventDetails, PersonDetails } from '../server/mockDB';

export default (event: EventDetails, invitees: PersonDetails[]) => {
	return /*html*/ `
<html lang="en">
	<head>
		<title>${event.title}</title>
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
			discover(document.createElement('wa-input'));
		</script>

		<!-- load scrollable cards component -->
		<script src="https://unpkg.com/scrollable-cards@1"></script>

		<!-- load components -->
		<script src="/public/components/person-card.js"></script>
		<script src="/public/components/event-invitee.js"></script>
		<script src="/public/components/invitee-group.js"></script>

		<script src="/public/scripts/light-dark.js"></script>

		<link href="/public/styles/layout.css" rel="stylesheet" />
		<link href="/public/styles/sc-card.css" rel="stylesheet" />
		<link href="/public/styles/input-grid.css" rel="stylesheet" />

		<!-- event page styles -->
		<style>
			event-title {
				display: flex;
				flex-direction: column;
				gap: 0.2em;
				text-align: center;
				align-items: center;
			}
			h1 {
				margin: 0;
			}
			wa-avatar {
				--size: 120px;
			}
			#location-badge {
				font-size: 1.2em;
			}
			#event-date,
			#invitees {
				align-self: center;
				font-size: var(--wa-font-size-l);
			}
			h2 {
				font-size: 1.5em;
				align-self: flex-start;
				text-align: start;
			}
			invitee-group {
				--avatar-size: 100px;
				align-self: center;
			}
			wa-button {
				align-self: center;
				width: 400px;
				max-width: 100%;
			}
		</style>
	</head>
	<body>
		<main>
			<event-title>
				<h1>${event.title}</h1>
			</event-title>

			<invitee-group>
				${invitees
					.map(
						(invitee) => /*html*/ `
					<event-invitee
						name="${invitee.name}"
						avatar="${invitee.avatarURL}"
					></event-invitee>`,
					)
					.join('')}
			</invitee-group>
			<div id="invitees">
				<wa-badge appearance="filled-outlined" variant="neutral" pill>${event.inviteeIds.length} Invitees</wa-badge>
			</div>
			<div id="event-date">
				<wa-badge appearance="filled-outlined" variant="neutral" pill>
					<wa-format-date month="short" day="numeric" year="numeric" date="${event.date}"></wa-format-date>
				</wa-badge>
			</div>

			<h2>Guests</h2>
			<sc-container>
					${invitees
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
				</sc-card>
			</sc-container>
			<wa-button variant="neutral" appearance="outlined" aria-label="Add Guest to event"> Add Guests + </wa-button>
		</main>
	</body>
</html>
`;
};
