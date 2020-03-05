import React, { useEffect, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Hero from './components/Hero';
import PortfolioEntry from './components/PorfolioEntry';
import { getPortfolioEntries } from './services';
import { serializer } from './serializer';

export default function App() {
	const [portfolioEntries, setPortfolioEntries] = useState(null);

	useEffect(() => {
		getPortfolioEntries().then((res) => {
			setPortfolioEntries(res);
		})
	}, [])

	return (
		<>
			<Hero />

			{portfolioEntries?.map(entry => (
				<PortfolioEntry key={entry._id}>
					<h2 className="portfolio-entry-title">{entry.title}</h2>
					<BlockContent blocks={entry.content} serializers={serializer} />
				</PortfolioEntry>
			))}

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Blueye ROV controller UI</h2>
				<p className="portfolio-entry-description">I had a chance to work with <a href="https://www.blueyerobotics.com/">Blueye
					robotics</a> from early on in their <a href="https://www.youtube.com/watch?v=afW6B9txP-s">adventure</a>. Blueye
					were developing a submersible unmanned drone to make the sea more accessible to more people. In a highly
					multidiciplinary team, my role in the project has been to design the UI for controlling the drone.
				</p>
				<img src="assets/img/blueye-montage.jpg" className="portfolio-entry-img" alt="" />
				<video src="https://www.dropbox.com/s/g58dotxvsw731mx/blueye-inapp.mp4?raw=1" className="portfolio-entry-img" autoPlay
					loop muted></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Talk on project with Blueye Robotics at Trondheim Developer Conference 18</h2>
				<p className="portfolio-entry-description">A look into the ROV UI project I did for Blueye Robotics together with some
			of my very skilled co-workers</p>
				<video src="https://www.dropbox.com/s/33w99n5ae2nnt1e/tdc-18-high.mp4?raw=1" className="portfolio-entry-img"
					controls></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Programvare for evakuering av cruiseskip</h2>
				<p className="portfolio-entry-description">Sporing av mennesker og oppgaver i kart-grensesnitt for å redde liv under
				evakuering på cruiseskip. Modulen er utviklet for å passe inn i Autronicas eksisterende systemer som i dag brukes
			av cruise, fabrikker, atomkraftverk over hele verden. </p>
				<img src="assets/img/autronica-evacuation.png" className="portfolio-entry-img fullwidth" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Talk on prototyping tools at IxDA in 2016</h2>
				<p className="portfolio-entry-description">A quick talk about some of the prototyping tools I used at the time, and a
			peek into some projects.</p>
				<video src="https://www.dropbox.com/s/y6xofhupj4scaim/ixda16.mp4?raw=1" className="portfolio-entry-img"
					controls></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Bus driver computer GUI</h2>
				<p className="portfolio-entry-description">Redesign of bus computer interface in Helsinki.</p>
				<img src="assets/img/fara-montage.jpeg" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Bus ticket validator</h2>
				<p className="portfolio-entry-description">Prototypes and visual concept and UI for ticket validators developed by Fara
			for public transportation.</p>
				<img src="assets/img/fara-validator-montage.jpg" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Climate control alert handling for professionals</h2>
				<p className="portfolio-entry-description"></p>
				<img src="assets/img/IWMAC-CheckPoint.png" className="portfolio-entry-img fullwidth" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">App for personal power consuption overview</h2>
				<p className="portfolio-entry-description">How can we prevent people from using too much electricity during peak hours?
				That's the question our client asked when we started this project in parallel with new power boxes being rolled
			out in Norway.</p>
				<img src="assets/img/NTE-phone.jpg" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Orbital Command – Unity strategy game</h2>
				<p className="portfolio-entry-description">In my spare time I sometimes tinker on a 2D orbital mechanics meets real-time
				strategy game. The current version, I am making in Unity, but I have earlier versions made in Swift and Unreal
			Engine too.</p>
				<video src="https://www.dropbox.com/s/ipf9odrrmq3avva/oc-unreal-engine.mp4?raw=1" className="portfolio-entry-img"
					autoPlay loop controls muted></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Public transportation ticked administration web shop</h2>
				<p className="portfolio-entry-description"></p>
				<img src="assets/img/fara-webshop.png" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Pharmacology overview portal</h2>
				<p className="portfolio-entry-description">Norsk Laboratoriekodeverk overview page for substances – the implemented
			version is running at <a href="http://www.farmakologiportalen.no/kodeverket/#/summary">farmakologiportalen.no</a>
				</p>
				<img src="assets/img/farmakologiportalen.png" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Trondheim Kommune</h2>
				<p className="portfolio-entry-description">Responsive government portal. I did the visual design and a lot of the
			front-end code.</p>
				<img src="assets/img/tk-frontpage.png" className="portfolio-entry-img" alt="" />
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Drone HUD</h2>
				<p className="portfolio-entry-description">After seeing <a href="http://www.imdb.com/title/tt1483013/">Oblivion</a> I
			just HAD to create this quick After Effects composition.</p>
				<video src="https://www.dropbox.com/s/1qwijux95e9wgl5/drone-hud.mp4?raw=1" className="portfolio-entry-img" autoPlay loop
					muted></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">Wildcat</h2>
				<p className="portfolio-entry-description">Silly slo-mo footage from my iPhone 5s somehow ended up like this.</p>
				<video src="https://www.dropbox.com/s/r49myicwn8vczwu/wildcat.mp4?raw=1" className="portfolio-entry-img" autoPlay loop
					muted></video>
			</PortfolioEntry>

			<PortfolioEntry>
				<h2 className="portfolio-entry-title">NAPHA</h2>
				<p className="portfolio-entry-description">Napha has a social network for psychology professionals.</p>
				<img src="assets/img/napha-frontpage.png" className="portfolio-entry-img img-small" alt="" />
			</PortfolioEntry>
		</>
	)
}
