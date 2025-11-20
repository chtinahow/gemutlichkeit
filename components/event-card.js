const eventCardStyleSheet = new CSSStyleSheet();
eventCardStyleSheet.replaceSync(/*css*/ `
	:host {
		display: block;
	}

	event-card-container {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
		aspect-ratio: 1 / 1;
		width: 150px;
		align-items: center;
	}

	event-card-name {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
		text-align: center;
	}

	::slotted(event-invitee:not(:first-of-type)) {
    margin-left: calc(-1.5 * var(--wa-space-m));
  }

	::slotted(event-invitee:nth-child(n+5)) {
    display: none;
  }

	avatar-group {
		white-space: nowrap;
	}
`);

class EventCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [eventCardStyleSheet];
	}

	connectedCallback() {
		const invitees = this.assignedSlot;
		console.log(invitees);
		this.shadowRoot.innerHTML = /*html*/ `
			<event-card-container>
				<event-card-name>${this.getAttribute('name')}</event-card-name>
				<avatar-group>
					<slot></slot>
				</avatar-group>
				<wa-badge appearance="filled-outlined" variant="neutral" pill>
					4 Invitees
				</wa-badge>
				<wa-badge appearance="filled-outlined" variant="neutral" pill>
					<wa-format-date month="short" day="numeric" year="numeric" date="${this.getAttribute('date')}"></wa-format-date>
				</wa-badge>
			</event-card-container>
		`;
	}
}

customElements.define('event-card', EventCard);
