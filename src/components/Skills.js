import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <SkillsSection>
      {skillGroups.map((group, index) => (
        <SkillCard
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <CardTitle>{group.title}</CardTitle>
          <SkillChips>
            {group.skills.map((skill) => (
              <Chip key={skill} whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-glow)', color: '#000' }}>
                {skill}
              </Chip>
            ))}
          </SkillChips>
        </SkillCard>
      ))}
    </SkillsSection>
  );
};

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`;

const SkillCard = styled(motion.article)`
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent-glow);
    box-shadow: var(--glow-box);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-glow);
  font-family: var(--font-display);
  letter-spacing: 0.1em;
`;

const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled(motion.span)`
  background: rgba(45, 212, 191, 0.1);
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-family: var(--font-body);
  border: 1px solid var(--border-glass);
  cursor: default;
`;

export default Skills;
