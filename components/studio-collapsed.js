class InjectStudio extends HTMLElement {
	constructor() {
		super();

		this.id = "studio";
		this.dataset.url = "https://unfussy.org/projects/studio";
		this.className = "projects-list__item";
		this.style.maxHeight = "82.5%";

		this.innerHTML = `
		<div class="flex flex-column fullheight">
			<div class="projects-list__content">
				<section class="project__media video-section" data-width="1772" data-height="2196"
				style="width: 1772px;">
					<div class="video-container"
						data-bg="https://unfussy.org/projects/studio/designstu.png">
							<div class="video-bg" style="background: url('
							https://unfussy.org/projects/studio/designstu.png') center center / cover
							no-repeat;"></div>
							<video src="https://unfussy.org/projects/studio/designstu.mp4" width="1772"
								height="2196" muted="" playsinline="" loop=""></video>
					</div>
					<div class="projects-list__infos flex flex-wrap">
						<div class="projects-list__desc">
							<span class="hblack">Design Studio</span>
									<span>
										&nbsp;·&nbsp; A configurator for your home
									</span>
						</div>
					</div>
				</section>
			</div>
			<button class="btn__switch">
				<span>+</span>
				<span>[close]</span>
			</button>
		</div>
			`;
	}
}

customElements.define("studio-collapsed", InjectStudio);
