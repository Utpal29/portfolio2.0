import React from 'react'
import styled from 'styled-components'

const Patent = ({name, id, date, image}) => {
  return (
    <Pcontainer>
      <PatentCard>
        <Thumb style={{backgroundImage: `url(${image})`}}>
          <ThumbOverlay />
        </Thumb>
        <ContentWrapper>
          <Label>{name}</Label>
          <Subl>
            <IdLabel>Application Number:</IdLabel> 
            <IdNumber>{id}</IdNumber>
          </Subl>
          <Date>{date}</Date>
          <Bar />
        </ContentWrapper>
      </PatentCard>
    </Pcontainer>
  )
}

const Pcontainer = styled.section`
  margin: 0 0 50px 20px;
  width: 300px;
  padding: 0 2px;
  font-family: "Raleway";
`

const PatentCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`

const Thumb = styled.div`
  background: ${props => `url(${props.style.backgroundImage.slice(4, -1).replace(/['"]/g, '')})`} center center/cover;
  height: 200px;
  position: relative;
  transition: all 0.3s ease;
`

const ThumbOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Thumb}:hover & {
    opacity: 1;
  }
`

const ContentWrapper = styled.div`
  padding: 20px;
`

const Label = styled.div`
  font-family: "Raleway";
  font-size: 16pt;
  line-height: 1.4;
  font-weight: 600;
  color: #444649;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  ${PatentCard}:hover & {
    color: #04c2c9;
  }
`

const Subl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

const IdLabel = styled.span`
  font-family: "Raleway";
  font-size: 12pt;
  color: #616161;
  font-weight: 500;
`

const IdNumber = styled.span`
  font-family: "Raleway";
  font-size: 12pt;
  color: #e31b6d;
  font-weight: 600;
`

const Date = styled.div`
  font-family: "Raleway";
  font-size: 11pt;
  color: #04c2c9;
  margin: 5px 0 0 0;
  font-weight: 500;
`

const Bar = styled.div`
  margin: 15px 0px;
  background: #04c2c9;
  height: 3px;
  width: 40px;
  transition: width 0.3s ease;

  ${PatentCard}:hover & {
    width: 60px;
  }
`

export default Patent