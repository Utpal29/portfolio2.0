import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdOpen } from 'react-icons/io'
import '../style.css'

const Popup = ({ open, onClose, name, tech, pimage, info, link, git }) => {
  if (!open) return null

  var isTrueSet = (link === 'true')

  return (
    <div onClick={onClose}>
      <Overlay />
      <Modal onClick={e => e.stopPropagation()}>

        <Mimg style={{ backgroundImage: `url(${pimage})` }} />
        <Minfo>
          <Title> {name} </Title>
          <Tag>{tech}</Tag>
          <Detail>{info}</Detail>

          {isTrueSet &&
            <Mbtn href={`${git}`} target="_blank" rel="noopener noreferrer">
              <Mbtninner>
                <IoMdOpen style={{
                  fontSize: '11pt',
                  left: '-10px',
                  position: 'relative',
                  verticalAlign: 'middle',
                }} />
                VIEW SITE
              </Mbtninner>
            </Mbtn>
          }

        </Minfo>
        <AiOutlineClose style={{
          right: '25px',
          bottom: '25px',
          color: '#bbb',
          cursor: 'pointer',
          fontSize: '20pt',
          fontWeight: '800',
          position: 'absolute',
        }} onClick={onClose} />

      </Modal>
    </div>
  )
}

const Mimg = styled.div`
width: 700px;
height: 450px;
background: url(p.jpg) center center/cover;
margin: 0 auto;
`

const Minfo = styled.div`
padding: 35px 60px 90px 25px;
border-top: 3px solid #1b242f;
box-sizing: border-box;
color: #444;
font-family: "Raleway";
`

const Title = styled.div`
font-size: 22pt;
line-height: 30pt;
font-weight: bold;
`

const Tag = styled.div`
font-size: 11pt;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
color: #c0c0c0;
font-weight: 300;
padding-bottom: 15px;
`

const Detail = styled.div`
font-size: 11pt;
line-height: 18pt;
margin-top: 15px;
`

const Mbtn = styled.a`
color: inherit;
text-decoration: none;
`

const Mbtninner = styled.div`
pointer-events: initial;
visibility: visible;
left: 25px;
background: #e31b6d;
border: 0;
bottom: 20px;
color: #fff;
cursor: pointer;
font-size: 10pt;
font-weight: 600;
padding: 11px 30px;
position: absolute;
transition: all 0.5s;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  transition: opacity 0.3s;
  z-index: 4;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 4;

  max-width: 700px;
  opacity: 1;
  height: initial;
  align-items: flex-start;
  background: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 40%);
  box-sizing: border-box;
  color: #333;
  text-align: left;
  transition: all 0.3s;
`

export default Popup