import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { portfolioContent } from '../data';
import SectionHeading from './SectionHeading';

const Education = () => {
  const items = (portfolioContent.education || []).map((e) => ({
    school: e.school,
    degree: e.degree,
    location: e.location,
    period: e.dates,
    details: e.details || []
  }));

  return (
    <Section id="education">
      <Container>
        <SectionHeading
          title="ACADEMICS"
          subtitle="EDUCATION HISTORY"
        />

        <Timeline>
          {items.map((edu, index) => (
            <TimelineItem
              key={`${edu.school}-${edu.period}`}
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
                    <Degree>{edu.degree}</Degree>
                    <School>{edu.school} <Location>— {edu.location}</Location></School>
                  </div>
                  <Period>{edu.period}</Period>
                </CardHeader>

                {edu.details && edu.details.length > 0 && (
                  <StatsRow>
                    {edu.details.map((d) => (
                      <StatBadge key={d}>{d}</StatBadge>
                    ))}
                  </StatsRow>
                )}
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;

const Section = styled.section`
  padding: 0 24px 120px;
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
  background: var(--accent-secondary);
  box-shadow: 0 0 10px var(--accent-secondary);
  z-index: 2;
`;

const Line = styled.div`
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, var(--accent-secondary), transparent);
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
    border-color: var(--accent-secondary);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
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

const Degree = styled.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  color: var(--text-primary);
  font-family: var(--font-display);
`;

const School = styled.div`
  color: var(--accent-secondary);
  font-weight: 600;
  font-size: 1rem;
`;

const Location = styled.span`
  color: var(--text-secondary);
  font-weight: 400;
  font-size: 0.9rem;
`;

const Period = styled.span`
  font-family: monospace;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.85rem;
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const StatBadge = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-secondary);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;
