import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Patent from '../Patent';
import Research from '../Research';
import { patents } from '../../data/publications';

const Publications = () => {
  return (
    <Section>
      <Container>
        <Header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>RESEARCH & PATENTS</SectionTitle>
          <SectionSubtitle>PUBLICATIONS & RESEARCH</SectionSubtitle>
        </Header>

        <ContentWrapper>
          <ResearchSection>
            <SectionHeader>
              <h3>Featured Research</h3>
            </SectionHeader>
            <Research />
          </ResearchSection>

          <PatentsSection>
            <SectionHeader>
              <h3>Patents Filed</h3>
            </SectionHeader>
            <PatentsGrid>
              {patents.map((patent) => (
                <Patent key={patent.applicationId} {...patent} />
              ))}
            </PatentsGrid>
          </PatentsSection>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Publications;

const Section = styled.section`
  padding: 120px 24px;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled(motion.header)`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--text-primary);
  margin: 0 0 16px;
  text-shadow: var(--glow-text);
`;

const SectionSubtitle = styled.span`
  font-family: var(--font-display);
  color: var(--accent-primary);
  letter-spacing: 0.2em;
  font-size: 0.9rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const ResearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PatentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionHeader = styled.div`
  h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin: 0;
    padding-left: 16px;
    border-left: 3px solid var(--accent-primary);
  }
`;

const PatentsGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
