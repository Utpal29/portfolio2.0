import React from 'react';
import styled from 'styled-components';
import { FiFileText, FiArrowDownCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = ({ heroContent, handleScroll, projectsRef }) => {
  return (
    <HeroSection>
      <HeroContainer>
        <ContentSide>
          <GlitchText>HELLO WORLD</GlitchText>
          <TitleWrapper>
            <TitleLine>BUILDING</TitleLine>
            <TitleLine className="highlight">THE FUTURE</TitleLine>
            <TitleLine>OF WEB</TitleLine>
          </TitleWrapper>

          <Description>
            {heroContent.elevatorPitch}
          </Description>

          <MetaGrid>
            {heroContent.availability.openTo?.length > 0 && (
              <MetaItem>
                <MetaLabel>STATUS</MetaLabel>
                <MetaValue className="active">OPEN TO WORK</MetaValue>
              </MetaItem>
            )}
            <MetaItem>
              <MetaLabel>LOCATION</MetaLabel>
              <MetaValue>{heroContent.availability.location || 'Toronto, ON'}</MetaValue>
            </MetaItem>
          </MetaGrid>

          <ActionGroup>
            <PrimaryButton
              href="https://drive.google.com/file/d/1YWGOfpnkbT85XjQk2091LKihgLejMibN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText />
              <span>RESUME_V2.0</span>
            </PrimaryButton>
            <SecondaryButton
              onClick={() => handleScroll(projectsRef)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowDownCircle />
              <span>INIT_PROJECTS</span>
            </SecondaryButton>
          </ActionGroup>
        </ContentSide>

        <VisualSide>
          <GlassCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileImageWrapper>
              <img src="me.jpeg" alt="Utpal Prajapati" />
              <Scanline />
            </ProfileImageWrapper>
            <CardFooter>
              <Name>{heroContent.name}</Name>
              <Role>Full Stack Engineer</Role>
              <SocialLinks>
                <SocialIcon href="https://github.com/Utpal29" target="_blank"><FiGithub /></SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/utpal-prajapati-191a391a8/" target="_blank"><FiLinkedin /></SocialIcon>
              </SocialLinks>
            </CardFooter>
          </GlassCard>

          {/* Decorative Elements */}
          <FloatingElement
            style={{ top: '-20px', right: '-20px' }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <FloatingElement
            style={{ bottom: '40px', left: '-40px', width: '60px', height: '60px', borderColor: 'var(--accent-secondary)' }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </VisualSide>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 24px;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 60px;
  }

  @media (max-width: 480px) {
    gap: 40px;
  }
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 2;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

const GlitchText = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--accent-glow);
  letter-spacing: 0.2em;
  position: relative;
  
  &::before {
    content: '>_';
    margin-right: 8px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.9;
`;

const TitleLine = styled.h1`
  font-size: clamp(1.8rem, 7vw, 5.5rem);
  font-weight: 900;
  margin: 0;
  color: rgba(255, 255, 255, 0.1);
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;

  &.highlight {
    color: var(--text-primary);
    -webkit-text-stroke: 0;
    text-shadow: 0 0 30px rgba(45, 212, 191, 0.3);
  }

  &:hover {
    color: var(--accent-glow);
    -webkit-text-stroke: 0;
    transform: translateX(20px);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 540px;
  border-left: 2px solid var(--accent-primary);
  padding-left: 24px;

  @media (max-width: 968px) {
    border-left: none;
    border-top: 2px solid var(--accent-primary);
    padding-left: 0;
    padding-top: 24px;
    /* Prevent text hitting edge */
    padding-right: 16px; 
    margin-right: 16px;
    font-size: 1rem;
  }
`;

const MetaGrid = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 20px;
    justify-content: center;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  text-transform: uppercase;
`;

const MetaValue = styled.span`
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--text-primary);
  
  &.active {
    color: var(--accent-glow);
    text-shadow: 0 0 10px var(--accent-glow);
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 12px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  background: var(--accent-primary);
  color: #fff;
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: var(--glow-box);

  &:hover {
    background: var(--accent-glow);
    color: #000;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  border: 1px solid var(--accent-primary);
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
  cursor: pointer;

  &:hover {
    background: rgba(45, 212, 191, 0.1);
    border-color: var(--accent-glow);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const VisualSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const GlassCard = styled(motion.div)`
  background: var(--surface-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  padding: 20px;
  border-radius: 24px;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 480px) {
    padding: 16px;
    max-width: 300px; /* Reduce size on mobile */
  }
  position: relative;
  z-index: 2;
  box-shadow: var(--shadow-glass);
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid var(--border-glass);

  img {
    width: 100%;
    height: auto;
    filter: grayscale(20%) contrast(1.1);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%) contrast(1);
  }
`;

const Scanline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(45, 212, 191, 0.1) 51%);
  background-size: 100% 4px;
  pointer-events: none;
`;

const CardFooter = styled.div`
  text-align: center;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 4px;
  color: var(--text-primary);
`;

const Role = styled.p`
  color: var(--accent-glow);
  font-family: var(--font-display);
  font-size: 0.8rem;
  margin: 0 0 16px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-glow);
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid var(--accent-primary);
  border-radius: 12px;
  z-index: 1;
  opacity: 0.3;
`;
