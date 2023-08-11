class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = ` 
        <footer class="site-infos flex flex-column">
            <header class="site-infos__header flex flex-wrap sm-row">
                <a href="https://unfussy.org" class="sites-infos__name hred">Justin Turner &nbsp;&nbsp;&nbsp;</a>
                <div>
                
                <a href="https://unfussy.org/media/TurnerResume.pdf" target="_blank">CV</a>
                &nbsp;
                <a href="https://github.com/unfussyorg/radio" target="_blank">GH</a>
                &nbsp;
                    <a href="https://www.instagram.com/nobaseball" target="_blank">IG</a>
                    &nbsp;
                    <a href="mailto:justin@unfussy.org">·&nbsp;&nbsp;&nbsp;&nbsp;justin@unfussy.org</a>
                </div>

                <button class="btn__switch">
                    <span>me me me +</span>
                    <span>[close]</span>
                </button>
            </header>

            <section class="site-infos__main flex flex-wrap md-row remove-tm">
                <section class="site-infos__main flex flex-wrap md-row ragged add-right">
                    <div class="sm-row">
                        <p>
                            Bay area <span class="hblack">senior product designer</span> working on reality capture at <a class="rule" href="https://openspace.ai" target="_blank">OpenSpace</a>. Ex-<a class="rule" href="https://hover.to" target="_blank">HOVER</a>, ex-art director, from over yonder.
                        </p>
                    </div>
                </section>

                <section class="site-infos__main flex flex-wrap md-row remove-tm ragged">
                <div class="sm-row">
                <div class="hblack">Writing</div>
                     <div>
                         <p>
                            <a class="rule" href="https://medium.com/@justhenturnhair/designing-ai-that-doesnt-scare-your-parents-d0b6e3631fe7" target="_blank">Designing AI That Doesn't Scare Your Parents</a><br />
                        </p>
                     </div>
                 </div>
            </div>
                    

                    <div class="sm-row">
                        <div class="hblack">Experienced in</div>
                            <div>
                                <p>
                                    UX/UI<br />
                                    HCI &amp; IxD patterns<br />
                                    Workshops &amp; design sprints<br />
                                    Prototyping in 2D, 3D, &amp; IRL<br />
                                    User-testing (especially remote)<br />
                                    Data visualization<br />
                                    HTML &amp; CSS, basic FE architecture<br />
                                </p>
                             </div>
                        </div>           
                    </div>
                </section>
            </section>
<!--
            <a class="site-infos__attr" href="https://rsms.me/" target="_blank">Using Inter by rsms.me</a>
            -->
        </footer>
    `;
	}
}

customElements.define("footer-component", Footer);
