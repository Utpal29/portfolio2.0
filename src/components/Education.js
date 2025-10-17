import React from 'react';
import styled from 'styled-components';

const educationHistory = [
  {
    degree: 'Project Management – Information Technology (Postgraduate Certificate)',
    school: 'Seneca Polytechnic',
    location: 'Toronto, Canada',
    period: '2024 – 2025',
    gpa: 'GPA 3.8 / 4.0',
    highlights: ['Capstone: delivered PMO playbook for cross-border product launch.', 'Academic merit scholarship recipient.']
  },
  {
    degree: 'Business Analytics (Postgraduate Certificate)',
    school: 'Seneca Polytechnic',
    location: 'Toronto, Canada',
    period: '2023 – 2024',
    gpa: 'GPA 4.0 / 4.0',
    highlights: ['Dean’s Honour List', 'Led analytics lab sessions for 40+ classmates.']
  },
  {
    degree: 'B.Tech – Computer Science and Engineering',
    school: 'Vellore Institute of Technology',
    location: 'Vellore, India',
    period: '2019 – 2023',
    gpa: 'GPA 8 / 10',
    highlights: ['Elected Coding Club mentor', 'Graduated with specialization in Data Analytics.']
  }
];

const Education = () => {
  return (
    <Section id="education">
      <SectionHeading>
        <h2>Education</h2>
      </SectionHeading>
      <EduList>
        {educationHistory.map((entry) => (
          <EduItem key={entry.degree}>
            <Degree>{entry.degree}</Degree>
            <School>{entry.school}</School>
            <MetaList>
              <MetaItem>
                <MetaLabel>Location</MetaLabel>
                <MetaValue>{entry.location}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Years</MetaLabel>
                <MetaValue>{entry.period}</MetaValue>
              </MetaItem>
              {entry.gpa && (
                <MetaItem>
                  <MetaLabel>GPA</MetaLabel>
                  <MetaValue>{entry.gpa.replace(/^GPA\s*/i, '')}</MetaValue>
                </MetaItem>
              )}
            </MetaList>
          </EduItem>
        ))}
      </EduList>
    </Section>
  );
};

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

const EduList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EduItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 20px;
  background: var(--surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
`;

/* removed TopRow layout; degree and school now stack for clearer hierarchy */

const Degree = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-strong);
`;

/* removed old card/gpa badge styles for a lean list */

const School = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 600;
`;

const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  margin-top: 2px;
`;

const MetaItem = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
`;

const MetaLabel = styled.span`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
`;

const MetaValue = styled.span`
  font-size: 0.9rem;
  color: var(--text-strong);
`;

/* description list removed */

export default Education;
