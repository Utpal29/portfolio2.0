import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <LargeText>
            LET'S<br />
            <span className="highlight">BUILD</span><br />
            TOGETHER
          </LargeText>

          <ContactInfo>
            <Description>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </Description>

            <ActionGrid>
              <SocialWrapper>
                <SocialButton
                  href="https://www.linkedin.com/in/utpal-prajapati-191a391a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: 'var(--accent-glow)', borderColor: 'var(--accent-glow)' }}
                >
                  <FiLinkedin />
                </SocialButton>

                <SocialButton
                  href="https://github.com/Utpal29"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: 'var(--accent-glow)', borderColor: 'var(--accent-glow)' }}
                >
                  <FiGithub />
                </SocialButton>
              </SocialWrapper>
            </ActionGrid>
          </ContactInfo>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 120px 24px;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ContentWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const LargeText = styled.h2`
  font-size: clamp(2.5rem, 10vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  margin: 0;
  color: rgba(255, 255, 255, 0.1);
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);

  .highlight {
    color: var(--text-primary);
    -webkit-text-stroke: 0;
    text-shadow: 0 0 30px rgba(45, 212, 191, 0.3);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
`;

const ActionGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid var(--border-glass);
  border-radius: 12px;
  color: var(--text-secondary);
  font-size: 1.4rem;
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
`;
