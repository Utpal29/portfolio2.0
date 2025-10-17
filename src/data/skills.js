import { portfolioContent } from './content';

const skillMeta = [
  {
    key: 'Backend',
    title: 'Backend Engineering',
    summary: 'Spring Boot, REST, and data layers built for clarity and resilience.'
  },
  {
    key: 'Frontend',
    title: 'Frontend Experience',
    summary: 'Modern React stacks with crisp, accessible, and responsive UIs.'
  },
  {
    key: 'Data & Analytics',
    title: 'Data & Analytics',
    summary: 'ETL, visualization, and ML foundations that turn raw data into insight.'
  },
  {
    key: 'DevOps & Tooling',
    title: 'DevOps & Tooling',
    summary: 'Delivery pipelines, hosting, and developer tooling that keep releases smooth.'
  }
];

export const skillGroups = skillMeta.map(({ key, title, summary }) => ({
  title,
  summary,
  skills: portfolioContent.skills[key] || []
}));
