const personCardStyleSheet = new CSSStyleSheet();
personCardStyleSheet.replaceSync(/*css*/ `
	:host {
		display: block;
	}
	
	person-card-container {
		display: flex;
		flex-direction: column;
		gap: 0.2em;
		aspect-ratio: 1 / 1;
		width: 100px;
		align-items: center;
	}

	wa-avatar {
		--size: 64px;
	}
`);

class PersonCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [personCardStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<person-card-container>
				<wa-avatar initials="TH" label="Avatar with initials: TH"></wa-avatar>
				<span>Tina Howard</span>
				<wa-tag size="small" pill>
					<wa-format-date month="long" day="numeric" year="numeric" date="2020-07-15T09:17:00-04:00"></wa-format-date>
				</wa-tag>
			</person-card-container>
		`;
	}
}

customElements.define('person-card', PersonCard);
