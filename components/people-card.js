const peopleCardStyleSheet = new CSSStyleSheet();
peopleCardStyleSheet.replaceSync(/*css*/ `
	:host {
		
	}
`);

class PeopleCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [peopleCardStyleSheet];
	}
}

customElements.define('people-card', PeopleCard);