import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { portfolioContent } from '../data';
import SectionHeading from './SectionHeading';

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
      <Container>
        <SectionHeading
          title="CAREER_LOG"
          subtitle="EXPERIENCE HISTORY"
        />

        <Timeline>
          {items.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TimelineMarker>
                <Dot />
                <Line />
              </TimelineMarker>
              <Card>
                <CardHeader>
                  <div>
                    <Role>{exp.title}</Role>
                    <Company>{exp.company}</Company>
                    <Location>{exp.location}</Location>
                  </div>
                  <Period>{exp.period}</Period>
                </CardHeader>

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
      </Container>
    </Section>
  );
});

Experience.displayName = 'Experience';

export default Experience;

const Section = styled.section`
  padding: 120px 24px;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 32px;

  @media (max-width: 600px) {
    grid-template-columns: 2px 1fr;
    gap: 20px;
    padding-left: 8px;
  }
`;

const TimelineMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-glow);
  box-shadow: 0 0 10px var(--accent-glow);
  z-index: 2;
`;

const Line = styled.div`
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, var(--accent-glow), transparent);
  margin-top: 4px;
  opacity: 0.3;
`;

const Card = styled.div`
  background: var(--surface-glass);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 32px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent-glow);
    box-shadow: var(--glow-box);
  }

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`;

const Role = styled.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  color: var(--text-primary);
  font-family: var(--font-display);
`;

const Company = styled.div`
  color: var(--accent-glow);
  font-weight: 600;
  font-size: 1rem;
`;

const Location = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 4px;
`;

const Period = styled.span`
  font-family: monospace;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
`;

const Highlights = styled.ul`
  margin: 0 0 24px;
  padding-left: 20px;
  color: var(--text-secondary);

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    
    &::marker {
      color: var(--accent-glow);
    }
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechChip = styled.span`
  font-size: 0.75rem;
  color: var(--text-primary);
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid var(--border-glass);
  padding: 4px 12px;
  border-radius: 999px;
  font-family: monospace;
`;
