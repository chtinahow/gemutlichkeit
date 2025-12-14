const eventCardStyleSheet = new CSSStyleSheet();
eventCardStyleSheet.replaceSync(/*css*/ `
	:host {
		display: block;
		--avatar-size: 50px;
		--avatar-border: solid 2px var(--wa-color-surface-default);
	}

	event-card-container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		aspect-ratio: 1 / 1;
		width: 150px;
		align-items: center;
	}

	event-card-name {
		height: 2em;
		line-height: 1.05em;
		width: 100%;
		text-align: center;
	}

	::slotted(event-invitee:not(:first-of-type)) {
    margin-left: calc(-1.5 * var(--wa-space-m));
  }

	#overflow-invitees {
    margin-left: calc(-1.5 * var(--wa-space-m));
		border: var(--avatar-border);
		--size: var(--avatar-size);
	}

	::slotted(event-invitee:nth-child(n+4)) {
    display: none;
  }

	avatar-group {
		white-space: nowrap;
	}

	wa-badge {
		width: 100%;
	}

	badge-group {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
		width: 100%;
	}
`);

class EventCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [eventCardStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<event-card-container>
				<event-card-name>${this.getAttribute('name')}</event-card-name>
				<avatar-group>
					<slot></slot>
					<wa-avatar id="overflow-invitees" initials="+0" style="display: none;"></wa-avatar>
				</avatar-group>
				<badge-group>
					<wa-badge id="invitee-count" appearance="filled-outlined" variant="neutral" pill>
					</wa-badge>
					<wa-badge appearance="filled-outlined" variant="neutral" pill>
						<wa-format-date month="short" day="numeric" year="numeric" date="${this.getAttribute('date')}"></wa-format-date>
					</wa-badge>
				</badge-group>
			</event-card-container>
		`;

		const inviteeBadge = this.shadowRoot.getElementById('invitee-count');
		const inviteeOverflow = this.shadowRoot.getElementById('overflow-invitees');
		const slotElement = this.shadowRoot.querySelector('slot');
		slotElement.addEventListener('slotchange', () => {
			const count = slotElement.assignedElements().length;
			inviteeBadge.textContent = `${count} Invitees`;
			if (count > 3) {
				inviteeOverflow.setAttribute('initials', `+${count - 3}`);
				inviteeOverflow.style.display = '';
			}
		});
	}
}

customElements.define('event-card', EventCard);
