import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 4rem 0 2rem;
  background: #0F172A;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(100, 149, 237, 0.2);
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 1rem;
  color: #E2E8F0;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #3B82F6;
  text-shadow: 0px 2px 8px rgba(67, 108, 255, 0.3);
  margin-bottom: 0.5rem;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: #CBD5E1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  
  &:hover {
    color: #3B82F6;
    background: rgba(59, 130, 246, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  color: #E2E8F0;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #3B82F6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #94A3B8;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    font-size: 0.85rem;
  }
`;

function Footer() {
  return (
    <FooterContainer id="footer">
      <FooterWrapper>
        <Logo>Sanjay A</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Achievements</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2025 Sanjay A. All rights reserved.<br />
          
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;