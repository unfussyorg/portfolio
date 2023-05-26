class Scrollbar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = ` 
        <section class="projects-scrollbar">
			<div class="projects-scrollbar__line"></div>
			<div class="projects-scrollbar__thumb"></div>
		</section>
    `;
	}
}

customElements.define("scrollbar-component", Scrollbar);
