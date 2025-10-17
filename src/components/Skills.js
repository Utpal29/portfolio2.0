import React from 'react';
import styled from 'styled-components';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <SkillsSection>
      {skillGroups.map((group) => (
        <SkillCard key={group.title}>
          <CardTitle>{group.title}</CardTitle>
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

  @media (max-width: 600px) {
    gap: 18px;
  }
`;

const SkillCard = styled.article`
  background: var(--surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 18px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: var(--shadow-soft);
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Chip = styled.span`
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.83rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export default Skills;
