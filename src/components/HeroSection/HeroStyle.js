import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.background2 || "#1E293B"};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  z-index: 1;
  border-top: 1px solid rgba(100, 149, 237, 0.2);

  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary || "#3B82F6"};
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 960px) {
    max-width: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.text_primary || "#F8FAFC"};
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);

  @media (max-width: 960px) {
    font-size: 2.8rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 2rem;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary || "#3B82F6"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary || "#94A3B8"};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.primary || "#3B82F6"};
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);

    &:before {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    padding: 14px 0;
    font-size: 1rem;
  }
`;