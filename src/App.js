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
              <PrimaryCTA href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
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
            <img src="me.jpeg" alt="Utpal Prajapati at graduation" />
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

        <Experience />
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
  left: 0;
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
  backdrop-filter: blur(12px);
  background: rgba(10, 18, 40, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const NavContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
`;

const Brand = styled.button.attrs({
  type: 'button'
})`
  background: none;
  border: none;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
`;

const MobileToggle = styled.button.attrs({
  type: 'button'
})`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 24px;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    right: 24px;
    background: rgba(10, 18, 40, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 16px;
    flex-direction: column;
    gap: 12px;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
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
  padding: 64px 24px 56px 24px;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
`;

const StatCard = styled.div`
  background: var(--surface-elevated);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  display: flex;
  justify-content: center;

  img {
    width: min(320px, 100%);
    border-radius: 24px;
    border: 1px solid #22303C;
    box-shadow: var(--shadow-hover);
  }
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px;
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
    font-size: 1.9rem;
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
`;

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.7;
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
`;

const PublicationsSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;

const ResearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactSection = styled.section`
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.12), rgba(14, 116, 144, 0.35));
  padding: 80px 24px;
`;

const ContactCard = styled.div`
  max-width: 780px;
  margin: 0 auto;
  background: var(--surface-primary);
  border-radius: 24px;
  padding: 48px;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-hover);
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
`;

const ContactCopy = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
`;

const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Footer = styled.footer`
  padding: 60px 24px;
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
`;

const FooterNote = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
`;

export default App;
