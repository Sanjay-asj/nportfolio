import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.section`
    padding: 5rem 2rem;
    background: #0F172A;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    border-top: 1px solid rgba(100, 149, 237, 0.2);
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 40px 0px 100px 0;
    gap: 12px;
    
    @media (max-width: 960px) {
        padding: 20px 0px 80px 0;
    }
`;

export const Title = styled.div`
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: #E2E8F0;
    text-align: center;
    text-shadow: 0px 2px 8px rgba(67, 108, 255, 0.3);
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
        margin-top: 12px;
    }
`;

export const Desc = styled.div`
    font-size: 1.1rem;
    color: #94A3B8;
    text-align: center;
    max-width: 700px;
    margin-bottom: 3rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        max-width: 90%;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid #3B82F6;
    color: #3B82F6;
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    background: rgba(13, 26, 83, 0.5);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.15);
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    ${({ active }) =>
        active && `
        background: #3B82F6;
        color: white;
        font-weight: 600;
    `}
    
    &:hover {
        background: rgba(59, 130, 246, 0.5);
        color: white;
    }
    
    @media (max-width: 768px) {
        padding: 8px 12px;
        border-radius: 6px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: #3B82F6;
    opacity: 0.5;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    
    @media (max-width: 960px) {
        gap: 20px;
    }
    
    @media (max-width: 640px) {
        gap: 16px;
        padding: 10px;
    }
`;

export const ExperienceCard = styled.div`
    background: #1E293B;
    border-radius: 12px;
    padding: 1.8rem;
    border-left: 4px solid #3B82F6;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width: 100%;
    max-width: 400px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 600;
    color: #F8FAFC;
    margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    color: #94A3B8;
    margin-bottom: 0.8rem;
`;

export const CardDate = styled.span`
    display: inline-block;
    background: #1E40AF;
    color: #EFF6FF;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    margin-bottom: 1rem;
`;

export const CardDesc = styled.p`
    font-size: 1rem;
    color: #CBD5E1;
    line-height: 1.6;
    margin-bottom: 1.2rem;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 1rem;
`;

export const SkillTag = styled.span`
    background: rgba(59, 130, 246, 0.15);
    color: #3B82F6;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
`;

export const CertificateLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #3B82F6;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: rgba(59, 130, 246, 0.1);
    transition: all 0.2s ease;

    &:hover {
        background: rgba(59, 130, 246, 0.2);
        color: #60A5FA;
    }
`;