import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  const experienceData = [
    {
      title: "Software Engineer (Full-Time)",
      company: "Bank of America",
      location: "Hyderabad, India",
      period: "Jul 2023 – Dec 2023",
      responsibilities: [
        "Developed and maintained secure financial applications using Java and REST APIs.",
        "Collaborated with cross-functional teams to deliver backend features and bug fixes.",
        "Followed Agile Scrum practices, participated in daily standups, sprint planning, and reviews.",
        "Wrote automated tests to improve code reliability and reduce regression issues."
      ]
    },
    {
      title: "Team Manager & Student Success Officer – Seneca Food Hackathon (Internship)",
      company: "Seneca College",
      location: "Toronto, Canada",
      period: "Feb 2025 – Apr 2025",
      responsibilities: [
        "Served dual roles: managed team progress as Team Manager and supported participants' well-being as Student Success Officer.",
        "Organized Agile sprints, tracked tasks using Kanban tools, and ensured timely delivery.",
        "Presented the final project to faculty and industry experts, earning positive feedback.",
        "Demonstrated leadership, time management, and collaboration in a high-pressure environment."
      ]
    }
  ];

  return (
    <ExperienceSection>
      <Header>EXPERIENCE</Header>
      <HeaderLine />
      <ExperienceGrid>
        {experienceData.map((exp, index) => (
          <ExperienceCard key={index}>
            <JobTitle>{exp.title}</JobTitle>
            <CompanyInfo>
              {exp.company}, <LocationSpan>{exp.location}</LocationSpan>
            </CompanyInfo>
            <Period>{exp.period}</Period>
            <ResponsibilitiesList>
              {exp.responsibilities.map((responsibility, respIndex) => (
                <ResponsibilityItem key={respIndex}>
                  {responsibility}
                </ResponsibilityItem>
              ))}
            </ResponsibilitiesList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: #ffffff;
  width: 100%;
`;

const Header = styled.div`
  line-height: 150%;
  font-family: "raleway";
  font-size: 25pt;
  color: #444649;
  font-weight: bold;
  display: block;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 30pt;
  }
`;

const HeaderLine = styled.div`
  background: #444649;
  height: 4px;
  width: 70px;
  margin: 25px auto 100px auto;
  text-align: center;
`;

const ExperienceGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ExperienceCard = styled.div`
  padding: 35px;
  background: #f5f5f5;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border-left: 4px solid #04c2c9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const JobTitle = styled.h3`
  font-family: "Raleway";
  font-size: 18pt;
  color: #444649;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const CompanyInfo = styled.div`
  font-family: "Raleway";
  font-size: 14pt;
  color: #616161;
  margin-bottom: 5px;
`;

const LocationSpan = styled.span`
  color: #04c2c9;
`;

const Period = styled.div`
  font-family: "Raleway";
  font-size: 12pt;
  color: #e31b6d;
  margin-bottom: 20px;
  font-weight: 500;
`;

const ResponsibilitiesList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: none;
`;

const ResponsibilityItem = styled.li`
  font-family: "Raleway";
  font-size: 12pt;
  color: #616161;
  margin-bottom: 10px;
  line-height: 1.6;
  position: relative;

  &:before {
    content: "•";
    color: #04c2c9;
    font-weight: bold;
    position: absolute;
    left: -20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Experience; 