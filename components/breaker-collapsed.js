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

								<span class="hblack">Breaker</span>
									<span>
										&nbsp;·&nbsp; Scratch-made feature flagging
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

customElements.define("breaker-collapsed", InjectBreaker);
