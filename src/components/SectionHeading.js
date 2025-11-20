import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  return (
    <Header
      $align={align}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Title>
        {title}
        <GlitchEffect aria-hidden="true">{title}</GlitchEffect>
      </Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Header>
  );
};

export default SectionHeading;

const Header = styled(motion.header)`
  text-align: ${props => props.$align};
  margin-bottom: 80px;
  position: relative;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--text-primary);
  margin: 0 0 16px;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  /* Gradient Text Effect */
  background: linear-gradient(to right, #fff, var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
`;

const GlitchEffect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--page-bg);
  color: var(--accent-glow);
  opacity: 0.5;
  z-index: -1;
  transform: translate(2px, 2px);
  filter: blur(1px);
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  animation: glitch 2s infinite linear alternate-reverse;

  @keyframes glitch {
    0% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); transform: translate(2px, 2px); }
    10% { clip-path: polygon(0 15%, 100% 15%, 100% 55%, 0 55%); transform: translate(-2px, -2px); }
    20% { clip-path: polygon(0 10%, 100% 10%, 100% 60%, 0 60%); transform: translate(2px, 0); }
    30% { clip-path: polygon(0 30%, 100% 30%, 100% 70%, 0 70%); transform: translate(-2px, 2px); }
    40% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translate(2px, -2px); }
    50% { clip-path: polygon(0 45%, 100% 45%, 100% 80%, 0 80%); transform: translate(-2px, 0); }
    60% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); transform: translate(2px, 2px); }
    100% { clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); transform: translate(2px, 2px); }
  }
`;

const Subtitle = styled.span`
  display: block;
  font-family: var(--font-display);
  color: var(--accent-primary);
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  text-transform: uppercase;
  
  &::before, &::after {
    content: '//';
    color: var(--text-secondary);
    margin: 0 8px;
    opacity: 0.5;
  }
`;
