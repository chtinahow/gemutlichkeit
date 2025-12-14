export default () => {
	return /*html*/ `
<html lang="en">
	<head>
		<title>Halloween bash 2025</title>
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
		<script src="public/components/person-card.js"></script>
		<script src="public/components/event-invitee.js"></script>
		<script src="public/components/invitee-group.js"></script>

		<script src="public/scripts/light-dark.js"></script>

		<link href="public/styles/layout.css" rel="stylesheet" />
		<link href="public/styles/sc-card.css" rel="stylesheet" />
		<link href="public/styles/input-grid.css" rel="stylesheet" />

		<!-- event page styles -->
		<style>
			person-association-title {
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
			<person-association-title>
				<h1>Halloween Bash 2025</h1>
			</person-association-title>

			<invitee-group>
				<event-invitee
					name="Katie Walker"
					avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Katie%20Walker"
				></event-invitee>
				<event-invitee
					name="Bill Tarr"
					avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Bill%20Tarr"
				></event-invitee>
				<event-invitee
					name="Jesse Jurman"
					avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman"
				></event-invitee>
				<event-invitee
					name="Tina Howard"
					avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Tina%20Howard"
				></event-invitee>
				<event-invitee
					name="Jackie Dubin"
					avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jackie%20Dubin"
				></event-invitee>
			</invitee-group>
			<div id="invitees">
				<wa-badge appearance="filled-outlined" variant="neutral" pill>8 Invitees</wa-badge>
			</div>
			<div id="event-date">
				<wa-badge appearance="filled-outlined" variant="neutral" pill>
					<wa-format-date month="short" day="numeric" year="numeric" date="2020-10-31T09:17:00-04:00"></wa-format-date>
				</wa-badge>
			</div>

			<h2>Guests</h2>
			<sc-container>
				<sc-card>
					<person-card
						name="Christina Howard"
						date="2020-07-15T09:17:00-04:00"
						avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Christina%20Howard"
					></person-card>
				</sc-card>
				<sc-card>
					<person-card
						name="Jesse Jurman"
						date="2020-07-15T09:17:00-04:00"
						avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman"
					></person-card>
				</sc-card>
				<sc-card>
					<person-card
						name="Bill Tarr"
						date="2020-09-15T09:17:00-04:00"
						avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Bill%20Tarr"
					></person-card>
				</sc-card>
				<sc-card>
					<person-card
						name="Katie Walker"
						date="2020-07-25T09:17:00-04:00"
						avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Katie%20Walker"
					></person-card>
				</sc-card>
				<sc-card>
					<person-card
						name="Jackie Dubin"
						date="2020-07-25T09:17:00-04:00"
						avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jackie%20Dubin"
					></person-card>
				</sc-card>
			</sc-container>
			<wa-button variant="neutral" appearance="outlined" aria-label="Add Guest to event"> Add Guests + </wa-button>
		</main>
	</body>
</html>
`;
};
