import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "JavaScript"]
    },
    backend: {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "MongoDB", "MySQL"]
    },
    projectManagement: {
      title: "Project Management",
      skills: ["Git", "Agile", "Scrum", "Team Leadership"]
    },
    dataAnalytics: {
      title: "Data Analytics",
      skills: ["Data Visualization", "Statistical Analysis", "Machine Learning", "Python Analytics"]
    }
  };

  return (
    <SkillsContainer>
      <SkillsGrid>
        {Object.values(skillCategories).map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle>{category.title}</CategoryTitle>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  color: #04c2c9;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: "Raleway";
  font-weight: 600;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SkillItem = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #04c2c9;
    color: white;
  }
`;

const SkillName = styled.span`
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
`;

export default Skills; 