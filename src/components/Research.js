import React from 'react';
import styled from 'styled-components';
import { FiBookOpen, FiUsers, FiCalendar, FiLink } from 'react-icons/fi';

const Research = () => {
  const paperDetails = {
    title: "Role of Hybrid Optimization in Improving Performance of Sentiment Classification System",
    authors: "A. Shukla, V. Juneja, S. Singh, U. Prajapati, A. Gupta and D. Dhabliya",
    conference: "2022 Seventh International Conference on Parallel, Distributed and Grid Computing (PDGC)",
    location: "Solan, Himachal Pradesh, India",
    year: "2022",
    pages: "541-546",
    doi: "10.1109/PDGC56933.2022.10053333",
    link: "https://ieeexplore.ieee.org/document/10053333"
  };

  return (
    <ResearchSection>
      <Header>PUBLISHED RESEARCH PAPER</Header>
      <HeaderLine />
      <ResearchCard>
        <Title>{paperDetails.title}</Title>
        <InfoGrid>
          <InfoItem>
            <FiUsers className="icon" />
            <InfoText>{paperDetails.authors}</InfoText>
          </InfoItem>
          <InfoItem>
            <FiBookOpen className="icon" />
            <InfoText>{paperDetails.conference}</InfoText>
          </InfoItem>
          <InfoItem>
            <FiCalendar className="icon" />
            <InfoText>{paperDetails.location}, {paperDetails.year}, pp. {paperDetails.pages}</InfoText>
          </InfoItem>
          <InfoItem>
            <FiLink className="icon" />
            <InfoLink href={paperDetails.link} target="_blank" rel="noopener noreferrer">
              DOI: {paperDetails.doi}
            </InfoLink>
          </InfoItem>
        </InfoGrid>
      </ResearchCard>
    </ResearchSection>
  );
};

const ResearchSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px 180px 20px;
  text-align: left;
  line-height: 18pt;
  color: #616161;
  font-family: "Raleway";
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
  margin: 25px auto 60px auto;
  text-align: center;
`;

const ResearchCard = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(4, 194, 201, 0.1);
  max-width: 900px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-color: #04c2c9;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const Title = styled.h2`
  font-size: 20pt;
  color: #444649;
  margin-bottom: 30px;
  font-weight: 600;
  line-height: 1.4;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: #04c2c9;
    transition: width 0.3s ease;
  }

  ${ResearchCard}:hover &:after {
    width: 100px;
  }

  @media (max-width: 768px) {
    font-size: 16pt;
  }
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  color: #616161;

  .icon {
    color: #04c2c9;
    font-size: 20px;
    min-width: 20px;
    margin-top: 4px;
  }
`;

const InfoText = styled.span`
  font-size: 13pt;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 12pt;
  }
`;

const InfoLink = styled.a`
  font-size: 13pt;
  color: #04c2c9;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #04c2c9;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #e31b6d;
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: #e31b6d;
    }
  }

  @media (max-width: 768px) {
    font-size: 12pt;
  }
`;

export default Research; 