import styled from 'styled-components';
import _default from '../../themes/default';

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #ffffff; /* Changed to white */
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #f0f0f0; /* Slightly lighter white on hover */
  }
`;
