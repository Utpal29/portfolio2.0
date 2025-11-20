import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Patent = ({ title, applicationId, status, link }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWrapper>
        <FiAward />
      </IconWrapper>
      <Content>
        <Status $status={status}>{status}</Status>
        <Title>{title}</Title>
        <Meta>ID: {applicationId}</Meta>
      </Content>
      <ExternalIcon>
        <FiExternalLink />
      </ExternalIcon>
    </Card>
  );
};

export default Patent;

const Card = styled(motion.a)`
  background: var(--surface-glass);
  border: 1px solid var(--border-glass);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  gap: 24px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent-glow);
    box-shadow: var(--glow-box);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(45, 212, 191, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-glow);
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Status = styled.span`
  font-family: monospace;
  font-size: 0.75rem;
  color: ${({ $status }) => ($status === 'Granted' ? '#4ade80' : '#fbbf24')};
  background: ${({ $status }) => ($status === 'Granted' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(251, 191, 36, 0.1)')};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.4;
  text-transform: none; /* Override global uppercase */
`;

const Meta = styled.span`
  font-family: monospace;
  color: var(--text-secondary);
  font-size: 0.85rem;
`;

const ExternalIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--text-secondary);
  opacity: 0;
  transform: translate(5px, -5px);
  transition: all 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
