const personCardStyleSheet = new CSSStyleSheet();
personCardStyleSheet.replaceSync(/*css*/ `
	:host {

	}
`);

class PersonCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [personCardStyleSheet];
	}
}

customElements.define('person-card', PersonCard);
