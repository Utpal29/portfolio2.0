import React from 'react';
import styled from 'styled-components';
import { FiBookOpen, FiExternalLink } from 'react-icons/fi';
import { researchPapers } from '../data/publications';

const Research = () => {
  return (
    <List>
      {researchPapers.map((paper) => (
        <PaperCard key={paper.title}>
          <IconCircle aria-hidden>
            <FiBookOpen />
          </IconCircle>
          <Content>
            <Title>{paper.title}</Title>
            <ChipRow>
              <Chip title="Venue">{paper.venue}</Chip>
              {paper.year && <Chip>{paper.year}</Chip>}
              {paper.doi && <Chip variant="muted">DOI: {paper.doi}</Chip>}
            </ChipRow>
            <Summary>{paper.summary}</Summary>
            <Actions>
              <Action href={paper.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
                <span>IEEE Xplore</span>
              </Action>
            </Actions>
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
  background: var(--surface-elevated);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.span`
  background: ${({ variant }) => (variant === 'muted' ? 'var(--surface-primary)' : 'var(--accent)')};
  color: ${({ variant }) => (variant === 'muted' ? 'var(--text-muted)' : 'var(--accent-contrast)')};
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Summary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
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
