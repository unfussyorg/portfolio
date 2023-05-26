class InjectBreaker extends HTMLElement {
	constructor() {
		super();

		this.id = "breaker";
		this.dataset.url = "https://unfussy.org/projects/breaker";
		this.className = "projects-list__item";
		this.style.maxHeight = "75%";

		this.innerHTML = `
				<div class="flex flex-column fullheight">
					<div class="projects-list__content">
						<div 
							class="project__media fullheight lazy-container"
							data-src="https://unfussy.org/projects/breaker/breakerCover.png" 
							data-final-width=""
							data-width="1674" 
							data-height="1994"
						>
							<img src="https://unfussy.org/projects/breaker/breakerCover.png" />
							<div class="projects-list__infos flex flex-wrap">
								<div class="projects-list__desc">

								<p>
								<span class="hblack">Breaker</span> unlocks safe and frequent user-testing. It allows experimental features to be toggled live without breaking
								production, then rolled out to users in cohorts. We were tired of waiting for split.io to be invented, so we made it ourselves.
							</p>
									
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

customElements.define("breaker-collapsed", InjectBreaker);
