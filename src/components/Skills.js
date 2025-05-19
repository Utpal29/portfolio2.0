import React from 'react';
import styled from 'styled-components';
import { FaCode, FaServer, FaProjectDiagram, FaChartBar } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = {
    frontend: {
      icon: <FaCode />,
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "JavaScript", "Redux"]
    },
    backend: {
      icon: <FaServer />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "MongoDB", "MySQL", "REST APIs"]
    },
    projectManagement: {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      skills: ["Git", "Agile", "Scrum", "Team Leadership", "JIRA", "Risk Management"]
    },
    dataAnalytics: {
      icon: <FaChartBar />,
      title: "Data Analytics",
      skills: ["Data Visualization", "Statistical Analysis", "Machine Learning", "Python Analytics", "SQL", "Power BI"]
    }
  };

  return (
    <SkillsContainer>
      <SkillsGrid>
        {Object.values(skillCategories).map((category, index) => (
          <SkillCategory key={index}>
            <CategoryHeader>
              <IconWrapper>{category.icon}</IconWrapper>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillName>{skill}</SkillName>
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  background: linear-gradient(135deg, #04c2c9 0%, #00a1a7 100%);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(4, 194, 201, 0.2);
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }
`;

const SkillCategory = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(4, 194, 201, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-color: #04c2c9;

    ${IconWrapper} {
      transform: scale(1.1);
      box-shadow: 0 6px 12px rgba(4, 194, 201, 0.3);

      svg {
        transform: rotate(360deg);
      }
    }
  }
`;

const CategoryTitle = styled.h3`
  color: #444649;
  font-size: 16px;
  font-family: "Raleway";
  font-weight: 600;
  margin: 0;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 47px;
`;

const SkillItem = styled.div`
  background: #f5f5f5;
  border-radius: 15px;
  padding: 6px 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: #ffffff;
    border-color: #04c2c9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SkillName = styled.span`
  font-family: "Raleway";
  font-size: 13px;
  font-weight: 500;
  color: #616161;

  ${SkillItem}:hover & {
    color: #04c2c9;
  }
`;

export default Skills; 