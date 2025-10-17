import React from 'react';
import styled from 'styled-components';

const experiences = [
  {
    company: 'Bank of America',
    title: 'Software Engineer',
    location: 'Hyderabad, India',
    period: 'Jul 2023 – Dec 2023',
    headline: 'Built and hardened loan-origination APIs that process thousands of requests per day.',
    highlights: [
      'Improved backend efficiency by 15% by refactoring Spring Boot services and optimizing MySQL queries used across lending journeys.',
      'Shipped 5+ production features and 50+ automated tests, lifting regression coverage by 30% and stabilizing sprint releases.',
      'Partnered with product, QA, and design in Agile ceremonies to triage 20+ high-priority issues within SLA.'
    ]
  },
  {
    company: 'Seneca Food Hackathon',
    title: 'Event Operations Intern (Team Lead)',
    location: 'Toronto, Canada',
    period: 'Jan 2025 – Mar 2025',
    headline: 'Coordinated delivery for a 1,000+ participant hackathon with data-driven check-ins and reporting.',
    highlights: [
      'Led a squad of 8 coordinators, using Kanban dashboards to unblock 50+ student teams ahead of submission deadlines.',
      'Consolidated analytics for mentors and judges, shortening progress reviews from hours to minutes.',
      'Formalized communication playbooks that improved stakeholder satisfaction scores by 20% (post-event survey).'
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading>
        <h2>Experience</h2>
        <p>Impact-focused highlights from recent engineering and leadership roles.</p>
      </SectionHeading>
      <Timeline>
        {experiences.map((experience) => (
          <TimelineItem key={experience.company}>
            <Dot />
            <Card>
              <Meta>
                <Role>{experience.title}</Role>
                <Company>{experience.company}</Company>
                <MetaRow>
                  <MetaTag>{experience.location}</MetaTag>
                  <MetaTag>{experience.period}</MetaTag>
                </MetaRow>
              </Meta>
              <Headline>{experience.headline}</Headline>
              <Highlights>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </Highlights>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

const Section = styled.section`
  padding: 120px 0;
  background: var(--page-bg);
`;

const SectionHeading = styled.div`
  max-width: 760px;
  margin: 0 auto 64px auto;
  text-align: center;
  color: var(--text-muted);

  h2 {
    font-size: 2.2rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: var(--text-strong);
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding-left: 32px;

  &:before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-strong);
  }

  @media (max-width: 600px) {
    padding-left: 24px;

    &:before {
      left: 10px;
    }
  }
`;

const TimelineItem = styled.article`
  position: relative;
  margin-bottom: 40px;
  padding-left: 24px;
`;

const Dot = styled.span`
  position: absolute;
  left: -2px;
  top: 18px;
  width: 14px;
  height: 14px;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid var(--page-bg);
  box-shadow: 0 0 0 4px var(--accent-muted);
`;

const Card = styled.div`
  background: var(--surface-primary);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 28px 32px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const Company = styled.span`
  font-size: 1rem;
  color: var(--accent);
  font-weight: 600;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const MetaTag = styled.span`
  background: var(--surface-elevated);
  color: var(--text-muted);
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
`;

const Headline = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--text-strong);
  line-height: 1.6;
`;

const Highlights = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--text-muted);

  li {
    line-height: 1.6;
  }
`;

export default Experience;
