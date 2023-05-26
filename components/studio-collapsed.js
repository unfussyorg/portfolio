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

				
							<p>
							I joined the <span class="hblack">Design Studio</span> team to help
							refresh &amp; expand a mobile-only prototype to tablet &amp; web. I added a
							suite of custom icons, updated 3D, &amp; a new navigation style for
							larger screens. I also fulfilled a popular user request by adding dark
							mode.
							</p>

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
