import React from 'react';
import styled from 'styled-components';
import { FiFileText, FiExternalLink } from 'react-icons/fi';

const Patent = ({ title, applicationId, status, focus, image, link }) => {
  const [filed, role] = String(status).split('•').map((s) => s && s.trim());
  const previewSrc = image && image.startsWith('public/') ? image.replace(/^public\//, '/') : image;

  return (
    <Card>
      {previewSrc ? (
        <Thumb as={link ? 'a' : 'div'}
          href={link || undefined}
          target={link ? '_blank' : undefined}
          rel={link ? 'noopener noreferrer' : undefined}
          aria-label={link ? `Open patent details for ${title}` : undefined}
        >
          <ThumbImg src={previewSrc} alt={`${title} — patent visual`} />
        </Thumb>
      ) : (
        <IconCircle aria-hidden>
          <FiFileText />
        </IconCircle>
      )}
      <Content>
        {link ? (
          <Title as="a" href={link} target="_blank" rel="noopener noreferrer">{title}</Title>
        ) : (
          <Title>{title}</Title>
        )}
        <ChipRow>
          <Chip title="Application ID">{applicationId}</Chip>
          {filed && <Chip>{filed}</Chip>}
          {role && <Chip variant="muted">{role}</Chip>}
        </ChipRow>
        <Summary>{focus}</Summary>
        {link && (
          <Actions>
            <LinkButton href={link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
              <span>View on WIPO</span>
            </LinkButton>
          </Actions>
        )}
      </Content>
    </Card>
  );
};

const Card = styled.article`
  background: var(--surface-elevated);
  border-radius: 18px;
  border: 1px solid var(--border-subtle);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  box-shadow: var(--shadow-soft);

  @media (max-width: 480px) {
    padding: 18px;
    gap: 10px;
  }
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

const Thumb = styled.a`
  display: block;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  background: var(--surface-primary);
`;

const ThumbImg = styled.img`
  display: block;
  width: 100%;
  height: clamp(140px, 40vw, 160px);
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1rem, 4.2vw, 1.05rem);
  font-weight: 600;
  color: var(--text-strong);
  text-decoration: none;
  &:hover {
    color: var(--accent);
  }
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Chip = styled.span`
  background: ${({ variant }) => (variant === 'muted' ? 'var(--surface-primary)' : 'var(--accent)')};
  color: ${({ variant }) => (variant === 'muted' ? 'var(--text-muted)' : 'var(--accent-contrast)')};
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Summary = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 4px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 6px 0;
  &:hover {
    text-decoration: underline;
  }
`;

export default Patent;
