import React from 'react';
import styled from 'styled-components';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <SkillsSection>
      {skillGroups.map((group) => (
        <SkillCard key={group.title}>
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
            <CardSummary>{group.summary}</CardSummary>
          </CardHeader>
          <SkillChips>
            {group.skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </SkillChips>
        </SkillCard>
      ))}
    </SkillsSection>
  );
};

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  width: 100%;
`;

const SkillCard = styled.article`
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 28px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-strong);
  margin: 0;
`;

const CardSummary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  background: var(--accent-muted);
  color: var(--accent-contrast);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export default Skills;
