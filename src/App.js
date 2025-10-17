import './style.css';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { FiMenu, FiX, FiArrowDownCircle, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectCard from './components/ProjectCard';
import Patent from './components/Patent';
import Research from './components/Research';
import { projects } from './data/projects';
import { patents } from './data/publications';
import { portfolioContent } from './data';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
    if (!sectionRef.current) return;
    const offset = sectionRef.current.offsetTop - 70;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <Page>
      <SkipLink href="#main">Skip to content</SkipLink>
      <Navigation>
        <NavContent>
          <Brand onClick={() => handleScroll(heroRef)}>{heroContent.name}</Brand>
          <MobileToggle onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </MobileToggle>
          <NavLinks $open={isMenuOpen}>
            {navLinks.map((link) => (
              <button type="button" key={link.label} onClick={() => handleScroll(link.ref)}>{link.label}</button>
            ))}
          </NavLinks>
        </NavContent>
      </Navigation>

      <Main id="main">
        <HeroSection ref={heroRef}>
          <HeroContent>
            <HeroLabel>{heroContent.title}</HeroLabel>
            <HeroTitle>{heroContent.elevatorPitch}</HeroTitle>
            {heroContent.availability.location && (
              <HeroSubtitle>{heroContent.availability.location}</HeroSubtitle>
            )}
            <HeroMeta>
              {heroContent.availability.openTo?.length > 0 && (
                <HeroMetaItem>
                  <span>Open to: {heroContent.availability.openTo.join(' • ')}</span>
                </HeroMetaItem>
              )}
              {heroContent.availability.start && (
                <HeroMetaItem>
                  <span>Start: {heroContent.availability.start}</span>
                </HeroMetaItem>
              )}
            </HeroMeta>
            <CTAGroup>
              <PrimaryCTA
                href="https://drive.google.com/file/d/1oxVEK9ZAXX3d2J8vZdzjTZLKQfn2S6V1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText />
                <span>Download Resume</span>
              </PrimaryCTA>
              <SecondaryCTA as="button" type="button" onClick={() => handleScroll(projectsRef)}>
                <FiArrowDownCircle />
                <span>View Projects</span>
              </SecondaryCTA>
            </CTAGroup>
            <Stats>
              {heroContent.snapshotStats.map((stat) => (
                <StatCard key={stat.label}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </Stats>
          </HeroContent>
          <HeroImage>
            <HeroGlowTop aria-hidden="true" />
            <img src="me.jpeg" alt="Utpal Prajapati at graduation" />
            <HeroGlowBottom aria-hidden="true" />
          </HeroImage>
        </HeroSection>

        <Section ref={aboutRef} id="about">
          <SectionHeader>
            <h2>About</h2>
          </SectionHeader>
          <AboutGrid>
            <AboutCopy>
              <AboutLead>{aboutSummary}</AboutLead>
            </AboutCopy>
            <SkillsPanel>
              <SkillsHeading>Skills &amp; Tools</SkillsHeading>
              <Skills />
            </SkillsPanel>
          </AboutGrid>
        </Section>

        <Section ref={projectsRef} id="projects">
          <SectionHeader>
            <h2>Projects</h2>
          </SectionHeader>
          <ProjectGrid>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </ProjectGrid>
        </Section>

        <Experience ref={experienceRef} />
        <Education />

        <PublicationsSection>
          <SectionHeader>
            <h2>Publications & IP</h2>
            <p>Applied research and patented ideas that inform how I design software systems.</p>
          </SectionHeader>
          <PublicationsGrid>
            {patents.map((patent) => (
              <Patent key={patent.applicationId} {...patent} />
            ))}
          </PublicationsGrid>
          <ResearchBlock>
            <Research />
          </ResearchBlock>
        </PublicationsSection>

        <ContactSection ref={contactRef} id="contact">
          <ContactCard>
            <ContactTitle>Let’s build the next standout product.</ContactTitle>
            <ContactCopy>
              I’m currently interviewing for software engineering roles where I can ship end-to-end features and
              collaborate with cross-functional teams.
            </ContactCopy>
            <ContactActions>
              <PrimaryCTA href="https://www.linkedin.com/in/utpal-prajapati-191a391a8/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
                <span>Connect on LinkedIn</span>
              </PrimaryCTA>
              <SecondaryCTA as="a" href="https://github.com/Utpal29" target="_blank" rel="noopener noreferrer">
                <FiGithub />
                <span>Explore GitHub</span>
              </SecondaryCTA>
            </ContactActions>
          </ContactCard>
        </ContactSection>
      </Main>

      <Footer>
        <FooterContent>
          <FooterBrand>Utpal Prajapati</FooterBrand>
          <FooterLinks>
            {navLinks.map((link) => (
              <button type="button" key={link.label} onClick={() => handleScroll(link.ref)}>{link.label}</button>
            ))}
          </FooterLinks>
          <FooterNote>© {new Date().getFullYear()} Crafted with care in Toronto.</FooterNote>
        </FooterContent>
      </Footer>
    </Page>
  );
}

const Page = styled.div`
  background: var(--page-bg);
  color: var(--text-strong);
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

const Navigation = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(14px);
  background: linear-gradient(135deg, rgba(10, 18, 40, 0.92), rgba(10, 18, 40, 0.78));
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 20px 45px rgba(8, 15, 35, 0.35);

  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(148, 163, 184, 0.15);
    box-shadow: 0 12px 30px rgba(8, 15, 35, 0.25);
  }
`;

const NavContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`;

const Brand = styled.button.attrs({
  type: 'button'
})`
  background: rgba(20, 184, 166, 0.12);
  border: 1px solid transparent;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 3.3vw, 1.1rem);
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 14px;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus-visible {
    background: rgba(20, 184, 166, 0.2);
    border-color: var(--accent);
    transform: translateY(-1px);
  }
`;

const MobileToggle = styled.button.attrs({
  type: 'button'
})`
  display: none;
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid transparent;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  transition: background 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    display: inline-flex;
    font-size: 1.5rem;
  }

  &:hover,
  &:focus-visible {
    background: rgba(20, 184, 166, 0.18);
    border-color: rgba(20, 184, 166, 0.35);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    position: relative;
    background: rgba(148, 163, 184, 0.12);
    border: 1px solid transparent;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 18px;
    border-radius: 999px;
    transition: color 0.3s ease, border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;

    &:hover,
    &:focus-visible {
      background: rgba(20, 184, 166, 0.18);
      border-color: rgba(20, 184, 166, 0.5);
      color: var(--accent);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: calc(100% + 12px);
    right: 20px;
    background: rgba(10, 18, 40, 0.96);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 16px;
    padding: 18px;
    flex-direction: column;
    gap: 14px;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    width: min(260px, calc(100vw - 64px));
    box-shadow: 0 18px 40px rgba(8, 15, 35, 0.45);

    button {
      width: 100%;
      justify-content: flex-start;
      padding: 12px 14px;
      border-radius: 10px;
      text-align: left;
    }
  }

  @media (max-width: 480px) {
    right: 16px;
    left: 16px;
    width: auto;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(48px, 10vw, 64px) 24px 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 56px 20px 48px;
    gap: 28px;
  }

  @media (max-width: 600px) {
    padding: 48px 18px;
  }

  @media (max-width: 480px) {
    padding: 44px 16px;
    gap: 24px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 620px;

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

const HeroLabel = styled.span`
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.9rem);
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-muted);
`;

const HeroMeta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  color: var(--text-muted);
  font-size: 0.9rem;

  &:empty {
    display: none;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const HeroMetaItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.01em;

  svg {
    color: var(--accent);
  }
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 600px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BaseCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

const PrimaryCTA = styled(BaseCTA)`
  background: var(--accent);
  color: var(--accent-contrast);
  box-shadow: 0 18px 35px rgba(20, 184, 166, 0.35);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(20, 184, 166, 0.45);
  }
`;

const SecondaryCTA = styled(BaseCTA)`
  background: var(--surface-elevated);
  color: var(--text-strong);
  border: 1px solid var(--border-subtle);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-soft);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: var(--surface-elevated);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const StatValue = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
`;

const StatLabel = styled.span`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const HeroImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 4vw, 24px);
  overflow: visible;

  @media (min-width: 901px) {
    align-self: stretch;
    justify-content: center;
  }

  img {
    position: relative;
    z-index: 1;
    width: min(300px, 100%);
    border-radius: 24px;
    border: 1px solid #22303c;
    box-shadow: var(--shadow-hover);
  }

  @media (max-width: 600px) {
    order: -1;
    padding: clamp(8px, 3vw, 16px);
  }
`;

const HeroGlowBar = styled.span`
  position: absolute;
  inset: auto 10%;
  height: clamp(80px, 12vw, 110px);
  z-index: 0;
  filter: blur(40px);
  opacity: 0.55;
  pointer-events: none;
`;

const HeroGlowTop = styled(HeroGlowBar)`
  top: -16px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.25), rgba(20, 184, 166, 0.65));
`;

const HeroGlowBottom = styled(HeroGlowBar)`
  bottom: -24px;
  border-radius: 999px;
  background: linear-gradient(225deg, rgba(45, 212, 191, 0.45), rgba(37, 99, 235, 0.25));
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(48px, 9vw, 72px) clamp(16px, 6vw, 24px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h2 {
    margin: 0;
    font-size: clamp(1.6rem, 5vw, 1.9rem);
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-muted);
  }
`;

const AboutGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.7;
  max-width: 720px;
  width: 100%;
`;

const AboutLead = styled.p`
  margin: 0;
  color: var(--text-strong);
  font-size: 1.05rem;
  line-height: 1.6;
`;

const SkillsPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 720px;
`;

const SkillsHeading = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: start;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const PublicationsSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(56px, 11vw, 80px) clamp(16px, 6vw, 24px);
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const PublicationsGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1080px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const ResearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactSection = styled.section`
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(14, 116, 144, 0.35));
  padding: clamp(56px, 12vw, 80px) clamp(16px, 6vw, 24px);
`;

const ContactCard = styled.div`
  max-width: 780px;
  margin: 0 auto;
  background: var(--surface-primary);
  border-radius: 24px;
  padding: clamp(28px, 8vw, 48px);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-hover);
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  margin: 0;
  font-size: clamp(1.4rem, 5.5vw, 2rem);
  font-family: 'Raleway', sans-serif;
`;

const ContactCopy = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 4.2vw, 1rem);
  color: var(--text-muted);
  line-height: 1.8;
`;

const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Footer = styled.footer`
  padding: clamp(40px, 10vw, 60px) clamp(16px, 6vw, 24px);
  background: #0b1220;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const FooterBrand = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Raleway', sans-serif;
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    gap: 16px;

    button {
      font-size: 1rem;
    }
  }
`;

const FooterNote = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
`;

export default App;
