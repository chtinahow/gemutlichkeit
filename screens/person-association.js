export default () => {
	return /*html*/ `<html lang="en">
	<head>
		<title>Tina Howard / Jesse Jurman</title>
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
		<script src="public/components/event-card.js"></script>
		<script src="public/components/event-invitee.js"></script>

		<script src="public/scripts/light-dark.js"></script>

		<link href="public/styles/layout.css" rel="stylesheet" />
		<link href="public/styles/sc-card.css" rel="stylesheet" />
		<link href="public/styles/input-grid.css" rel="stylesheet" />

		<!-- person association page styles -->
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
			h2 {
				font-size: 1.5em;
				align-self: flex-start;
				text-align: start;
			}

			avatar-header {
				display: flex;
				align-self: center;
			}
		</style>
		<!-- styling for has met checkbox -->
		<style>
			has-met-checkbox {
				display: flex;
				align-items: center;
				align-self: center ;
			}
		</style>
	</head>
	<body>
		<main>
			<person-association-title>
				<h1>Tina Howard & Jesse Jurman</h1>
			</person-association-title>

			<avatar-header>
				<wa-avatar label="Tina Howard" image="https://api.dicebear.com/9.x/thumbs/svg?seed=Tina%20Howard"></wa-avatar>
				<wa-avatar label="Jesse Jurman" image="https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman"></wa-avatar>
			</avatar-header>
			<has-met-checkbox>
				<input type="checkbox" id="met" name="Has Met" />
				<label for="met">Has Met</label>
			</has-met-checkbox>
			<input-group>
				<input-row>
					<label for="relationship">Relationship</label>
					<input id="relationship" name="Relationship" />
				</input-row>
			</input-group>

			<h2>Events</h2>
			<sc-container>
				<sc-card>
					<event-card name="Halloween Bash" date="2020-10-31T09:17:00-04:00">
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
					</event-card>
				</sc-card>

				<sc-card>
					<event-card name="House Warming Party" date="2026-04-15T09:17:00-04:00">
						<event-invitee
							name="Jesse Jurman"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman"
						></event-invitee>
						<event-invitee
							name="Jackie Dubin"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jackie%20Dubin"
						></event-invitee>
						<event-invitee
							name="Tina Howard"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Tina%20Howard"
						></event-invitee>
						<event-invitee
							name="Katie Walker"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Katie%20Walker"
						></event-invitee>
						<event-invitee
							name="Bill Tarr"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Bill%20Tarr"
						></event-invitee>
					</event-card>
				</sc-card>
				<sc-card>
					<event-card name="Wine Tasting" date="2026-02-05T09:17:00-04:00">
						<event-invitee
							name="Jesse Jurman"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jesse%20Jurman"
						></event-invitee>
						<event-invitee
							name="Tina Howard"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Tina%20Howard"
						></event-invitee>
				</sc-card>
			</sc-container>
		</main>
	</body>
</html>
`;
};
