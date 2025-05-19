import React from 'react';
import styled from 'styled-components';

const Education = () => {
  const educationData = [
    {
      degree: "Postgraduate Diploma – Project Management – Information Technology",
      school: "Seneca Polytechnic",
      location: "Toronto, Canada",
      period: "2024 – 2025",
      gpa: "GPA: 3.8 / 4.0"
    },
    {
      degree: "Postgraduate Diploma – Business Analytics",
      school: "Seneca Polytechnic",
      location: "Toronto, Canada",
      period: "2023 – 2024",
      gpa: "GPA: 4.0 / 4.0"
    },
    {
      degree: "B.Tech – Computer Science and Engineering",
      school: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "2019 – 2023",
      gpa: "CGPA: 7.9 / 10"
    }
  ];

  return (
    <EducationSection>
      <Header>EDUCATION</Header>
      <HeaderLine />
      <EducationGrid>
        {educationData.map((edu, index) => (
          <EducationCard key={index}>
            <DegreeTitle>{edu.degree}</DegreeTitle>
            <SchoolInfo>
              {edu.school}, <LocationSpan>{edu.location}</LocationSpan>
            </SchoolInfo>
            <EducationDetails>
              <Period>{edu.period}</Period>
              <GPA>{edu.gpa}</GPA>
            </EducationDetails>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  padding: 100px 0;
  background: #f5f5f5;
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

const EducationGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const EducationCard = styled.div`
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  transition: transform 0.3s ease;
  border-left: 4px solid #04c2c9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const DegreeTitle = styled.h3`
  font-family: "Raleway";
  font-size: 18pt;
  color: #444649;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const SchoolInfo = styled.div`
  font-family: "Raleway";
  font-size: 14pt;
  color: #616161;
  margin-bottom: 10px;
`;

const LocationSpan = styled.span`
  color: #04c2c9;
`;

const EducationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Period = styled.span`
  font-family: "Raleway";
  font-size: 12pt;
  color: #616161;
`;

const GPA = styled.span`
  font-family: "Raleway";
  font-weight: 600;
  font-size: 12pt;
  color: #e31b6d;
`;

export default Education; 