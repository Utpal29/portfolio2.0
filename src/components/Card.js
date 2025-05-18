import React, {useState} from 'react'
import styled from 'styled-components'
import Popup from './Popup'


const Card = ({ name, tech, pimage, info, link, git }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CardSection>
      <div>
        <Box style={{backgroundImage: `url(${pimage})`}}>
        </Box>
        <Text>
          <TextTitle>{name}</TextTitle>
          <TextTech>{tech}</TextTech>
        </Text>
        <Btnr onClick={() => setIsOpen(true)}>LEARN MORE</Btnr>

        <Popup name={`${name}`} tech={`${tech}`} pimage={`${pimage}`} info={`${info}`} link={`${link}`} git={`${git}`} open={isOpen} onClose={() => setIsOpen(false)}>
          
        </Popup>

      </div>
    </CardSection>
  )
}

const Btnr = styled.button`
bottom: 0;
left: 0;
position: absolute;
right: 0;
border: 2px solid #e31b6d;
font-size: 13pt;
margin: 0 auto;
padding: 7px 0;
width: 170px;
color: #1b242f;
opacity: 0;
text-align: center;
transition: all 0.3s ease-in-out;
z-index: 2;
font-family: "Raleway";

&:hover{
  background: #e31b6d;
  color: #fff;
}
}
`

const TextTitle = styled.div`
font-size: 16pt;
font-weight: bold;
`

const TextTech = styled.span`
color: #e31b6d;
font-size: 12pt;
font-family: "Raleway";
`

const Text = styled.div`
  display: inline-block;
  color: #1b242f;
  opacity: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  ine-height: 18pt;
  font-size: 12pt;
  font-family: "Raleway";
`

const Box = styled.div`
  background: url(up.png) center center/cover;
  width: 390px;
  height: 300px;
  max-width: 100%;
  transition: opacity 0.5s;
  color: #616161;
  font-family: "Raleway";
  text-align: center;
`
const CardSection = styled.div`
margin: 5px;
display: inline-block;
position: relative;

&:hover ${Box} {
  opacity: 0;
}

&:hover ${Text} {
  cursor: default;
  opacity: 1;
  top: 24%;
}

&:hover ${Btnr} {
  bottom: 24%;
  opacity: 1;
}
`
export default Card