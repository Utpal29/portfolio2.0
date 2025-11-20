import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ navLinks, handleScroll }) => {
  return (
    <FooterSection>
      <Container>
        <TopSection>
          <Brand>
            UTPAL<br />PRAJAPATI
          </Brand>
          <Links>
            {navLinks.map((link) => (
              <FooterLink key={link.label} onClick={() => handleScroll(link.ref)}>
                {link.label}
              </FooterLink>
            ))}
          </Links>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>© {new Date().getFullYear()} Utpal Prajapati. All rights reserved.</Copyright>
          <Socials>
            <SocialLink href="https://github.com/Utpal29" target="_blank"><FiGithub /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/utpal-prajapati-191a391a8/" target="_blank"><FiLinkedin /></SocialLink>
            <SocialLink href="mailto:utpal2904@gmail.com"><FiMail /></SocialLink>
          </Socials>
        </BottomSection>
      </Container>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: #000;
  padding: 80px 24px 40px;
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border-glass);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Brand = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1;
  margin: 0;
  color: var(--text-primary);
  letter-spacing: 0.1em;
`;

const Links = styled.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--accent-glow);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: var(--border-glass);
  margin-bottom: 40px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.6;
`;

const Socials = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-glow);
  }
`;
