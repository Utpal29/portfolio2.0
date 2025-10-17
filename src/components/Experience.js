import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { portfolioContent } from '../data';

const Experience = forwardRef((_, ref) => {
  const items = (portfolioContent.experience || []).map((e) => ({
    company: e.company,
    title: e.role,
    location: e.location,
    period: e.dates,
    highlights: e.highlights || [],
    tech: e.tech || []
  }));

  return (
    <Section id="experience" ref={ref}>
      <SectionHeading>
        <h2>Experience</h2>
      </SectionHeading>
      <Timeline>
        {items.map((exp) => (
          <TimelineItem key={`${exp.company}-${exp.period}`}>
            <Dot />
            <Card>
              <Meta>
                <HeaderRow>
                  <Role>{exp.title}</Role>
                  <CompanyBadge>{exp.company}</CompanyBadge>
                </HeaderRow>
                <MetaRow>
                  {exp.location && <MetaTag>{exp.location}</MetaTag>}
                  {exp.period && <MetaTag>{exp.period}</MetaTag>}
                </MetaRow>
              </Meta>
              {exp.highlights && exp.highlights.length > 0 && (
                <Highlights>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </Highlights>
              )}
              {exp.tech && exp.tech.length > 0 && (
                <TechList>
                  {exp.tech.slice(0, 6).map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </TechList>
              )}
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
});

Experience.displayName = 'Experience';

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px;
`;

const SectionHeading = styled.div`
  margin: 0 0 24px 0;
  text-align: center;
  
  h2 {
    margin: 0;
    font-size: 1.9rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 32px;

  &:before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-subtle);
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
  margin-bottom: 24px;
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
  background: var(--surface-elevated);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 24px;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const CompanyBadge = styled.span`
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 700;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const MetaTag = styled.span`
  background: var(--surface-primary);
  color: var(--text-muted);
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
`;

const Highlights = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--text-muted);

  li {
    line-height: 1.55;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechChip = styled.span`
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export default Experience;
