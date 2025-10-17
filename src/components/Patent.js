import React from 'react';
import styled from 'styled-components';
import { FiFileText } from 'react-icons/fi';

const Patent = ({ title, applicationId, status, focus }) => {
  return (
    <Card>
      <IconCircle>
        <FiFileText />
      </IconCircle>
      <Content>
        <Title>{title}</Title>
        <Metadata>
          <Badge>{applicationId}</Badge>
          <MetaText>{status}</MetaText>
        </Metadata>
        <Summary>{focus}</Summary>
      </Content>
    </Card>
  );
};

const Card = styled.article`
  background: var(--surface-primary);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 260px;
  box-shadow: var(--shadow-soft);
`;

const IconCircle = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-muted);
  color: var(--accent-contrast);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-strong);
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

const Badge = styled.span`
  background: var(--surface-elevated);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.78rem;
  color: var(--text-strong);
  border: 1px solid var(--border-subtle);
`;

const MetaText = styled.span`
  color: var(--text-muted);
  font-size: 0.85rem;
`;

const Summary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

export default Patent;
