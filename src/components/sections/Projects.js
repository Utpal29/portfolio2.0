import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import SectionHeading from '../SectionHeading';
import { projects } from '../../data/projects';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="DEPLOYMENTS"
          subtitle="FEATURED PROJECTS"
        />

        <ProjectGrid>
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </ProjectGrid>

        {projects.length > 4 && (
          <ShowMoreWrapper>
            <ShowMoreButton
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  SHOW LESS <FiChevronUp />
                </>
              ) : (
                <>
                  SEE ALL PROJECTS <FiChevronDown />
                </>
              )}
            </ShowMoreButton>
          </ShowMoreWrapper>
        )}
      </Container>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  padding: 120px 24px;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ShowMoreButton = styled(motion.button)`
  background: transparent;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  padding: 12px 24px;
  font-family: var(--font-display);
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(45, 212, 191, 0.1);
    box-shadow: 0 0 15px rgba(45, 212, 191, 0.2);
  }
`;
