class InjectDsys extends HTMLElement {
	constructor() {
		super();

		this.id = "designsystems";
		this.dataset.url = "https://unfussy.org/projects/designsystems";
		this.className = "projects-list__item";
		this.style.maxHeight = "90%";

		this.innerHTML = `
			<div class="flex flex-column fullheight">
				<div class="projects-list__content">
					<div class="project__media fullheight lazy-container"
						data-src="https://unfussy.org/projects/designsystems/cover.png" data-final-width=""
						data-width="4776" data-height="6670">
						<img src="https://unfussy.org/projects/designsystems/cover.png" />
						<div class="projects-list__infos flex flex-wrap">
							<div class="projects-list__desc">
							<span class="hblack">Design Systems</span>
							<span>
								&nbsp;·&nbsp; Pilot in Figma, React/Redux
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

customElements.define("designsystems-collapsed", InjectDsys);
