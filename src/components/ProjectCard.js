import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);


  const previewSrc = project.image && project.image.startsWith('public/')
    ? project.image.replace(/^public\//, '/')
    : project.image || '';

  const topTech = (project.techStack || []).slice(0, 4);

  return (
    <Card
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <CardContent>
        {previewSrc && (
          <Preview>
            <img src={previewSrc} alt={project.title} loading="lazy" />
            <Overlay>
              <ViewButton onClick={() => setExpanded(!expanded)}>
                {expanded ? 'CLOSE_DETAILS' : 'VIEW_DETAILS'}
              </ViewButton>
            </Overlay>
          </Preview>
        )}

        <Header onClick={() => setExpanded(!expanded)}>
          <Title>{project.title}</Title>
          <TechStack>
            {topTech.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </TechStack>
        </Header>

        <AnimatePresence>
          {expanded && (
            <Details
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Summary>{project.summary}</Summary>
              <AchievementList>
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </AchievementList>
              <Actions>
                <ActionButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                  <span>SOURCE_CODE</span>
                </ActionButton>
                {project.live && (
                  <ActionButton href={project.live} target="_blank" rel="noopener noreferrer" variant="secondary">
                    <FiExternalLink />
                    <span>LIVE_DEMO</span>
                  </ActionButton>
                )}
              </Actions>
            </Details>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

const Card = styled(motion.article)`
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent-glow);
    box-shadow: var(--glow-box);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Preview = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    opacity: 0.8;
  }

  &:hover img {
    transform: scale(1.05);
    opacity: 0.4;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.6);

  ${Preview}:hover & {
    opacity: 1;
  }
`;

const ViewButton = styled.button`
  background: transparent;
  border: 1px solid var(--accent-glow);
  color: var(--accent-glow);
  padding: 12px 24px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-glow);
    color: #000;
  }
`;

const Header = styled.div`
  padding: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
  font-family: var(--font-display);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechBadge = styled.span`
  font-size: 0.75rem;
  color: var(--accent-glow);
  border: 1px solid rgba(45, 212, 191, 0.3);
  padding: 4px 10px;
  border-radius: 999px;
  font-family: monospace;
`;

const Details = styled(motion.div)`
  padding: 0 24px 24px;
  overflow: hidden;
`;

const Summary = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const AchievementList = styled.ul`
  padding-left: 20px;
  color: var(--text-secondary);
  margin-bottom: 24px;

  li {
    margin-bottom: 8px;
    &::marker {
      color: var(--accent-glow);
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${({ variant }) => (variant === 'secondary' ? 'transparent' : 'var(--accent-primary)')};
  color: ${({ variant }) => (variant === 'secondary' ? 'var(--text-primary)' : '#fff')};
  border: ${({ variant }) => (variant === 'secondary' ? '1px solid var(--border-glass)' : 'none')};
  border-radius: 4px;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ variant }) => (variant === 'secondary' ? 'rgba(255,255,255,0.1)' : 'var(--accent-glow)')};
    color: ${({ variant }) => (variant === 'secondary' ? 'var(--text-primary)' : '#000')};
  }
`;
