import React, { useState, useId } from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  const previewSrc = project.image && project.image.startsWith('public/')
    ? project.image.replace(/^public\//, '/')
    : project.image || '';

  const previewAlt = `${project.title} cover`;
  const topTech = (project.techStack || []).slice(0, 4);

  return (
    <Card>
      {previewSrc ? (
        <Preview>
          <img src={previewSrc} alt={previewAlt} loading="lazy" />
        </Preview>
      ) : null}
      <Header
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={panelId}
      >
        <Title>{project.title}</Title>
        <Toggle aria-hidden="true" expanded={expanded}>
          <FiChevronDown />
        </Toggle>
      </Header>
      <Summary>{project.summary}</Summary>
      <TechList>
        {topTech.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </TechList>
      {expanded && (
        <Details id={panelId}>
          <AchievementList>
            {project.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </AchievementList>
          <Actions>
            <ActionButton href={project.github} target="_blank" rel="noopener noreferrer">
              <FiGithub />
              <span>GitHub</span>
            </ActionButton>
            {project.live && (
              <ActionButton href={project.live} target="_blank" rel="noopener noreferrer" variant="secondary">
                <FiExternalLink />
                <span>Live Demo</span>
              </ActionButton>
            )}
          </Actions>
        </Details>
      )}
    </Card>
  );
};

const Card = styled.article`
  background: var(--surface-elevated);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: var(--shadow-soft);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent);
  }

  @media (max-width: 480px) {
    border-radius: 16px;
  }
`;

const Preview = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--surface-primary);
  border-bottom: 1px solid var(--border-subtle);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  padding: 16px 18px 0 18px;
  cursor: pointer;
  text-align: left;
  gap: 10px;

  @media (max-width: 480px) {
    padding: 16px 16px 0 16px;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.1rem, 4.8vw, 1.25rem);
  font-weight: 600;
  color: var(--text-strong);
`;

const Toggle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--surface-elevated);
  color: var(--text-muted);
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
    transform: ${({ expanded }) => (expanded ? 'rotate(-180deg)' : 'rotate(0deg)')};
  }
`;

const Summary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0 18px;

  @media (max-width: 480px) {
    padding: 0 16px;
    font-size: 0.92rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 18px 12px 18px;

  @media (max-width: 480px) {
    padding: 0 16px 12px 16px;
    gap: 6px;
  }
`;

const TechBadge = styled.span`
  background: var(--accent);
  color: var(--accent-contrast);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 18px 18px 18px;

  @media (max-width: 480px) {
    padding: 0 16px 16px 16px;
    gap: 14px;
  }
`;

const AchievementList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--text-muted);

  li {
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding-left: 16px;
    gap: 8px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 18px 18px 18px;

  @media (max-width: 480px) {
    padding: 0 16px 16px 16px;
    flex-direction: column;
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  background: ${({ variant }) => (variant === 'secondary' ? 'var(--surface-elevated)' : 'var(--accent)')};
  color: ${({ variant }) => (variant === 'secondary' ? 'var(--text-strong)' : 'var(--accent-contrast)')};
  box-shadow: ${({ variant }) => (variant === 'secondary' ? 'none' : '0 10px 25px rgba(20, 184, 166, 0.35)')};

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ variant }) => (variant === 'secondary' ? 'var(--shadow-soft)' : '0 14px 32px rgba(20, 184, 166, 0.45)')};
  }

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

export default ProjectCard;
