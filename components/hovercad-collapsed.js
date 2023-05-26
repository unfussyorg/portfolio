class InjectCad extends HTMLElement {
	constructor() {
		super();

		this.id = "hovercad";
		this.dataset.url = "https://unfussy.org/projects/hovercad";
		this.className = "projects-list__item";
		this.style.maxHeight = "90%";

		this.innerHTML = `
			<div class="flex flex-column fullheight">
				<div class="projects-list__content">

				<div class="project__media fullheight lazy-container"
						data-src="https://unfussy.org/projects/hovercad/hc-cover.png" data-final-width=""
						data-width="3804" data-height="5600">
						<img src="https://unfussy.org/projects/hovercad/hc-cover.png" />
						<div class="projects-list__infos flex flex-wrap">
							<div class="projects-list__desc">

							<span class="hblack">HoverCAD</span>
							<span>
							is human-first, AI assisted 3D modeling. Starting with a blank sheet, we slashed
							Hover's
							unit cost by 75% in the first two years.
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

customElements.define("hovercad-collapsed", InjectCad);
