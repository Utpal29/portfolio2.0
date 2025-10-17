import { portfolioContent } from './content';

const mapProjectToLegacyShape = (project) => {
  const achievements = [...(project.impact || []), ...(project.features || [])].filter(Boolean);

  return {
    title: project.name,
    summary: project.summary,
    achievements,
    techStack: project.stack,
    github: project.links.github,
    live: project.links.live || '',
    image: project.links.image || ''
  };
};

export const projects = portfolioContent.projects.map(mapProjectToLegacyShape);
