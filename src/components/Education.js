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
      <Grid>
        {educationHistory.map((entry) => (
          <Card key={entry.degree}>
            <HeaderRow>
              <Degree>{entry.degree}</Degree>
              <Badge>{entry.gpa}</Badge>
            </HeaderRow>
            <SchoolRow>
              <School>{entry.school}</School>
              <TagRow>
                <Tag>{entry.location}</Tag>
                <Tag>{entry.period}</Tag>
              </TagRow>
            </SchoolRow>
            {entry.highlights?.length > 0 && (
              <HighlightList>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </HighlightList>
            )}
          </Card>
        ))}
      </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.article`
  background: var(--surface-elevated);
  border-radius: 18px;
  padding: 24px;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

const Degree = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const Badge = styled.span`
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
`;

const SchoolRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const School = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--text-strong);
  font-weight: 600;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: var(--surface-primary);
  color: var(--text-muted);
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
`;

const HighlightList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    line-height: 1.55;
  }
`;

export default Education;
