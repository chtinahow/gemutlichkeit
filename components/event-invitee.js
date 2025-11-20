const eventInviteeStyleSheet = new CSSStyleSheet();
eventInviteeStyleSheet.replaceSync(/*css*/ `
	wa-avatar {
		border: var(--avatar-border);
		--size: var(--avatar-size);
	}
`);

class EventInvitee extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [eventInviteeStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<wa-avatar label="${this.getAttribute('name')}" image="${this.getAttribute('avatar')}"></wa-avatar>
		`;
	}
}

customElements.define('event-invitee', EventInvitee);
