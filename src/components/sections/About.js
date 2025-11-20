import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Skills from '../Skills';
import SectionHeading from '../SectionHeading';

const About = ({ aboutSummary }) => {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          title="SYSTEM_INFO"
          subtitle="ABOUT THE DEVELOPER"
        />

        <ContentGrid>
          <BioCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BioHeader>
              <TerminalDot className="red" />
              <TerminalDot className="yellow" />
              <TerminalDot className="green" />
              <BioTitle>bio.txt</BioTitle>
            </BioHeader>
            <BioContent>
              <p>{aboutSummary}</p>
            </BioContent>
          </BioCard>

          <SkillsWrapper>
            <Skills />
          </SkillsWrapper>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default About;

const Section = styled.section`
  padding: 120px 24px;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  @media (min-width: 968px) {
    grid-template-columns: 0.8fr 1.2fr;
    align-items: start;
  }

  @media (max-width: 967px) {
    gap: 40px;
  }
`;

const BioCard = styled(motion.div)`
  background: var(--surface-glass-strong);
  border: 1px solid var(--border-glass);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-glass);
`;

const BioHeader = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border-glass);
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  
  &.red { background: #ff5f56; }
  &.yellow { background: #ffbd2e; }
  &.green { background: #27c93f; }
`;

const BioTitle = styled.span`
  margin-left: 12px;
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const BioContent = styled.div`
  padding: 32px;
  
  p {
    font-family: monospace;
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.05rem;
    margin: 0;
    
    &::before {
      content: '> ';
      color: var(--accent-glow);
    }
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
