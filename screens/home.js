export default () => {
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
		<script src="public/components/person-card.js"></script>
		<script src="public/components/event-card.js"></script>
		<script src="public/components/event-invitee.js"></script>

		<!-- dark / light mode script -->
		<script src="public/scripts/light-dark.js"></script>

		<link href="public/styles/layout.css" rel="stylesheet" />
		<link href="public/styles/sc-card.css" rel="stylesheet" />

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
							name="Jackie Dubin"
							avatar="https://api.dicebear.com/9.x/thumbs/svg?seed=Jackie%20Dubin"
						></event-invitee>
				</sc-card>
			</sc-container>
		</main>
	</body>
</html>
	`;
};
