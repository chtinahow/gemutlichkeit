const eventInviteeStyleSheet = new CSSStyleSheet();
eventInviteeStyleSheet.replaceSync(/*css*/ `
	wa-avatar {
    border: solid 2px var(--wa-color-surface-default);
		--size: 50px;
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
