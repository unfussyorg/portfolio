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
                    <a href="https://www.instagram.com/justhenturnhair/" target="_blank">IG</a>
                    &nbsp;
                    <a href="mailto:justin@unfussy.org">/&nbsp;&nbsp;&nbsp;&nbsp;justin@unfussy.org</a>
                    
                </div>

                <button class="btn__switch">
                    <span>bio +</span>
                    <span>[close]</span>
                </button>
            </header>

            <section class="site-infos__main flex flex-wrap md-row remove-tm">
                <section class="site-infos__main flex flex-wrap md-row ragged add-right">
                    <div class="sm-row">
                        <p>
                            Bay area <span class="hblack">senior product designer</span>. Most recently in R&amp;D at <a class="rule" href="https://hover.to" target="_blank">HOVER</a>, accelerating their mission to digitize the world's architecture. I focused on corralling CV &amp; ML
                            breakthroughs into tools that make users feel superhuman, instead of obsolete.
                        </p>
                        <br />
                        <p>
                            I started my career as a commercial art director in Los Angeles. After being schooled in camp at RuPaul's Drag
                            Race, I found a niche bringing the
                            <a class="rule" href="https://vimeo.com/90196200" target="_blank">same aesthetic</a>
                            to some very adventurous brands.
                        </p>
                        <br />
                        <p>
                            In my free time I build cars,
                            <a class="rule" href="https://www.instagram.com/p/By3eA_TJeer/" target="_blank">then break them</a>. Over the past year I designed a <a class="rule" href="https://www.garagejournal.com/forum/threads/two-sheds-in-a-trenchcoat.499858" target="_blank">timber framed studio</a> that could be erected by a single person. Unfortunately, that person was also me. <br>
                        </p>
                        <br />
                      
                    </div>
                </section>

                <section class="site-infos__main flex flex-wrap md-row remove-tm ragged">
            
                    <div class="sm-row">
                        <div class="hblack">Experienced in</div>
                        <div>
                            <p>
                                UX/UI/motion<br />
                                HCI &amp; IxD patterns<br />
                                Information architecture &amp; auditing<br />
                                System mapping with gherkin stories<br />
                                User flows &amp; journey mapping<br />
                                Workshops &amp; design sprints<br />
                                Prototyping in 2D, 3D, &amp; IRL<br />
                                User-testing (especially remote)<br />
                                Data visualization<br />
                                HTML &amp; CSS, basic FE architecture<br />
                                3D Modeling &amp; archviz<br />
                            </p>
                        </div>
                    </div>
                    <!--            
                    <div class="sm-row">
                        <div class="hblack">Writing</div>
                        <div>
                            <p>
                                <a class="rule" href="https://medium.com/" target="_blank">1</a><br />
                                firebase test machine/2<br />
                            </p>
                        </div>
                    </div>
                    -->
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
