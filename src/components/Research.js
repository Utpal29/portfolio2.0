import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';


const Research = () => {
  // Updated with specific paper details provided by user
  const research = {
    title: "Role of Hybrid Optimization in Improving Performance of Sentiment Classification System",
    venue: "2022 Seventh International Conference on Parallel, Distributed and Grid Computing (PDGC)",
    doi: "10.1109/PDGC56933.2022.10053333",
    summary: "Published research exploring hybrid optimization techniques to enhance sentiment classification performance.",
    link: "https://ieeexplore.ieee.org/document/10053333"
  };

  return (
    <Card>
      <Header>
        <IconWrapper>
          <FiBookOpen />
        </IconWrapper>
        <Title>Research Publication</Title>
      </Header>
      <PaperTitle>{research.title}</PaperTitle>
      <Venue>{research.venue}</Venue>
      <DOI>DOI: {research.doi}</DOI>
      <Link href={research.link} target="_blank" rel="noopener noreferrer">View Paper &rarr;</Link>
    </Card>
  );
};

export default Research;

const Card = styled(motion.div)`
  background: var(--surface-glass);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  }

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-secondary);
  font-size: 1.2rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
  font-family: var(--font-display);
`;

const PaperTitle = styled.h4`
  margin: 0 0 8px;
  font-size: 1.2rem;
  color: var(--text-primary);
  line-height: 1.4;
`;

const Venue = styled.p`
  color: var(--accent-glow);
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 500;
`;

const DOI = styled.p`
  color: var(--text-secondary);
  font-family: monospace;
  font-size: 0.85rem;
  margin: 0 0 24px;
`;

const Link = styled.a`
  display: inline-block;
  color: var(--accent-primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-glow);
  }
`;
