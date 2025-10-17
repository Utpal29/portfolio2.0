import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdOpen } from 'react-icons/io'
import '../style.css'

const Popup = ({ open, onClose, name, tech, pimage, info, link, git }) => {
  if (!open) return null

  var isTrueSet = (link === 'true')

  return (
    <PopupContainer onClick={onClose}>
      <Overlay />
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        
        <ModalContent>
          <Mimg style={{ backgroundImage: `url(${pimage})` }} />
          <Minfo>
            <Title>{name}</Title>
            <Tag>{tech}</Tag>
            <Detail>{info}</Detail>

            {isTrueSet && (
              <Mbtn href={`${git}`} target="_blank" rel="noopener noreferrer">
                <Mbtninner>
                  <IoMdOpen />
                  <span>VIEW SITE</span>
                </Mbtninner>
              </Mbtn>
            )}
          </Minfo>
        </ModalContent>
      </Modal>
    </PopupContainer>
  )
}

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 600px) {
    align-items: flex-start;
    padding: 12px;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
`

const Modal = styled.div`
  position: relative;
  background: #fff;
  border-radius: 15px;
  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: modalFadeIn 0.3s ease;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    max-height: calc(100vh - 24px);
  }

  @media (max-width: 600px) {
    border-radius: 16px;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Mimg = styled.div`
  width: 100%;
  height: clamp(220px, 40vh, 320px);
  background: url(p.jpg) center center/cover;
  border-radius: 15px 15px 0 0;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
    border-radius: 15px 0 0 15px;
  }
`

const Minfo = styled.div`
  padding: 30px;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: "Raleway";

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 18px;
  }
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #444649;
  line-height: 1.4;
  margin-bottom: 5px;
  font-family: "Raleway";

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 19px;
  }
`

const Tag = styled.div`
  font-size: 14px;
  color: #04c2c9;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: "Raleway";

  @media (max-width: 480px) {
    padding-bottom: 12px;
  }
`

const Detail = styled.div`
  font-size: 14px;
  line-height: 1.8;
  color: #616161;
  flex: 1;
  font-family: "Raleway";
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12.5px;
  }
`

const Mbtn = styled.a`
  text-decoration: none;
  margin-top: auto;
  width: fit-content;

  @media (max-width: 480px) {
    width: 100%;
  }
`

const Mbtninner = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #04c2c9;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: "Raleway";

  &:hover {
    background: #e31b6d;
    transform: translateY(-2px);
  }

  svg {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 20px;
    color: #444649;
  }

  &:hover {
    background: #e31b6d;
    transform: rotate(90deg);

    svg {
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
  }
`

export default Popup
