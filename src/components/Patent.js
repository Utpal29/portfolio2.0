import React from 'react'
import styled from 'styled-components'

const Patent = ({name, id, date, image}) => {
  return (
    <Pcontainer>
        <Thumb style={{backgroundImage: `url(${image})`}}></Thumb>
        <Label>{name}</Label>
        <Subl>Application Number: {id}</Subl>
        <Date>{date}</Date>
        <Bar></Bar>
    </Pcontainer>
  )
}

const Pcontainer = styled.section`
margin: 0 0 50px 20px;
width: 270px;
padding: 0 2px;
font-family: "Raleway";
`


const Thumb = styled.div`
background: url(p5.jpg) center center/cover;
border: 0.3px solid #000;
height: 200px;
margin: 0 0 15px 0;
`

const Label = styled.div`
font-size: 16pt;
line-height: 22pt;
font-weight: 500;
`

const Subl = styled.div`
font-size: 10pt;
font-family: "Open sans";
font-weight: 300;

`

const Date = styled.div`
font-size: 8.5pt;
font-family: "Open sans";
margin: 5px 0 0 0;
`

const Bar = styled.div`
margin: 15px 0px;
background: #04c2c9;
height: 3px;
width: 25%;
`

export default Patent