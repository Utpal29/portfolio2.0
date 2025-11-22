import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = ({ heroContent, navLinks, handleScroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollListener = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <Brand onClick={() => handleScroll(navLinks[0].ref)}>
            {heroContent.name.split(' ')[0]}<span className="highlight">.xyz</span>
          </Brand>

          <DesktopLinks>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                onClick={() => handleScroll(link.ref)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </NavLink>
            ))}
          </DesktopLinks>

          <MobileToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </MobileToggle>
        </NavContent>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <MobileLink
                key={link.label}
                onClick={() => {
                  handleScroll(link.ref);
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </MobileLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

const NavContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 1000px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 95%;
    top: 10px;
  }
`;

const NavContent = styled.div`
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: 999px;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-glass);
`;

const Brand = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  letter-spacing: 0.05em;

  .highlight {
    color: var(--accent-glow);
  }
`;

const DesktopLinks = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.button)`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--accent-glow);
    text-shadow: 0 0 8px var(--accent-glow);
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 5%;
  width: 90%;
  background: var(--surface-glass-strong);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
  box-shadow: var(--shadow-glass);
`;

const MobileLink = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 1.2rem;
  text-align: left;
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-glass);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--accent-glow);
    padding-left: 20px;
    transition: all 0.3s ease;
  }
`;
