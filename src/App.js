import './style.css';
import styled from 'styled-components';
import { useRef } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';


import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Background3D from './components/Background3D';



import { portfolioContent } from './data';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);


  const heroAvailability = portfolioContent.hero.availability ?? {};
  const heroContent = {
    ...portfolioContent.hero,
    elevatorPitch:
      portfolioContent.hero.elevatorPitchVariants?.[portfolioContent.hero.elevatorPitchDefault] ??
      portfolioContent.hero.elevatorPitchVariants?.energetic,
    availability: heroAvailability
  };

  const aboutSummary = portfolioContent.about.short;

  const navLinks = [
    { label: 'About', ref: aboutRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'Contact', ref: contactRef }
  ];

  const handleScroll = (sectionRef) => {
    if (!sectionRef.current) return;
    const offset = sectionRef.current.offsetTop - 70;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <Page>
      <Background3D />
      <SkipLink href="#main">Skip to content</SkipLink>
      <Navigation heroContent={heroContent} navLinks={navLinks} handleScroll={handleScroll} />

      <Main id="main">
        <div ref={heroRef}>
          <Hero heroContent={heroContent} handleScroll={handleScroll} projectsRef={projectsRef} />
        </div>

        <div ref={aboutRef}>
          <About aboutSummary={aboutSummary} />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

        <Experience ref={experienceRef} />
        <Education />

        <Publications />

        <div ref={contactRef}>
          <Contact />
        </div>
      </Main>

      <Footer navLinks={navLinks} handleScroll={handleScroll} />
    </Page>
  );
}

export default App;

const Page = styled.div`
  background: var(--page-bg);
  color: var(--text-strong);
  position: relative;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: clamp(0px, 2vw, 16px);
  padding: 12px 16px;
  background: var(--accent);
  color: var(--accent-contrast);
  border-radius: 0 0 8px 8px;
  z-index: 1000;

  &:focus {
    top: 0;
  }
`;



const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  z-index: 1;
`;










