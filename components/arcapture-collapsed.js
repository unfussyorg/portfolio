class InjectArc extends HTMLElement {
	constructor() {
		super();

		this.id = "arcapture";
		this.dataset.url = "https://unfussy.org/projects/arcapture";
		this.className = "projects-list__item";
		this.style.maxHeight = "75%";

		this.innerHTML = `
			<div class="flex flex-column fullheight">
				<div class="projects-list__content">
					<div class="project__media fullheight lazy-container"
						data-src="https://unfussy.org/projects/arcapture/arccover.png" data-final-width=""
						data-width="1272" data-height="2000">
						<img src="https://unfussy.org/projects/arcapture/arccover.png" />
						<div class="projects-list__infos flex flex-wrap">
							<div class="projects-list__desc">

							<span class="hblack">ARCapture</span>
							<span>
								&nbsp;·&nbsp; CV guided property capture
							</span>

							</div>
						</div>
					</div>
				</div>
				<button class="btn__switch">
					<span>+</span>
					<span>[close]</span>
				</button>
			</div>
			`;
	}
}

customElements.define("arcapture-collapsed", InjectArc);
