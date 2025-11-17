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
	
	person-card-name {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 100%;
		text-align: center;
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
		const name = this.getAttribute('name');
		const lastName = name.split(' ').at(-1);
		const truncatedName = name.replace(lastName, lastName.at(0));
		this.shadowRoot.innerHTML = /*html*/ `
			<person-card-container>
				<wa-avatar label="To be built" image="${this.getAttribute('avatar')}"></wa-avatar>
				<person-card-name>${truncatedName}</person-card-name>
				<wa-tag size="small" pill>
					<wa-format-date month="long" day="numeric" year="numeric" date="${this.getAttribute('date')}"></wa-format-date>
				</wa-tag>
			</person-card-container>
		`;
	}
}

customElements.define('person-card', PersonCard);
