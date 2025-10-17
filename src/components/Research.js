import React from 'react';
import styled from 'styled-components';
import { FiBookOpen, FiExternalLink } from 'react-icons/fi';
import { researchPapers } from '../data/publications';

const Research = () => {
  return (
    <List>
      {researchPapers.map((paper) => (
        <PaperCard key={paper.title}>
          <IconCircle>
            <FiBookOpen />
          </IconCircle>
          <Content>
            <Title>{paper.title}</Title>
            <Meta>{paper.venue}</Meta>
            <Summary>{paper.summary}</Summary>
            <Contribution>{paper.contribution}</Contribution>
            <Action href={paper.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
              <span>View publication</span>
            </Action>
          </Content>
        </PaperCard>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const PaperCard = styled.article`
  background: var(--surface-primary);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: var(--shadow-soft);
`;

const IconCircle = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-muted);
  color: var(--accent-contrast);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const Meta = styled.span`
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
`;

const Summary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Contribution = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Action = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  text-decoration: none;
  color: var(--accent);
  font-size: 0.9rem;

  &:hover {
    color: var(--accent-strong);
  }
`;

export default Research;
