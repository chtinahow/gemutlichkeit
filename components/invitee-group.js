const inviteeGroupStyleSheet = new CSSStyleSheet();
inviteeGroupStyleSheet.replaceSync(/*css*/ `
	:host {
		display: block;
		--avatar-size: 50px;
		--avatar-border: solid 2px var(--wa-color-surface-default);
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

	invitee-container {
		white-space: nowrap;
	}
`);

class InviteeGroup extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [inviteeGroupStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<invitee-container>
				<slot></slot>
				<wa-avatar id="overflow-invitees" initials="+0" style="display: none;"></wa-avatar>
			</invitee-container>
		`;

		const inviteeOverflow = this.shadowRoot.getElementById('overflow-invitees');
		const slotElement = this.shadowRoot.querySelector('slot');
		slotElement.addEventListener('slotchange', () => {
			const count = slotElement.assignedElements().length;
			if (count > 3) {
				inviteeOverflow.setAttribute('initials', `+${count - 3}`);
				inviteeOverflow.style.display = '';
			}
		});
	}
}

customElements.define('invitee-group', InviteeGroup);
