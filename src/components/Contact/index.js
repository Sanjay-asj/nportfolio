import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 6rem 2rem;
  background: #0F172A;
  position: relative;
  overflow: hidden;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  text-align: center;
  background: linear-gradient(90deg, #FFFFFF, #3B82F6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94A3B8;
  text-align: center;
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.a)`
  background: #1E293B;
  padding: 2.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #FFFFFF;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid #334155;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
    border-color: #3B82F6;
    background: #1E293B;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  svg {
    font-size: 2rem;
    color: #3B82F6;
  }
`;

const ContactMethod = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  text-align: center;
  color: #FFFFFF;
`;

const ContactDetail = styled.p`
  font-size: 1.15rem;
  color: #E2E8F0;
  text-align: center;
  word-break: break-word;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B82F6;
  font-size: 1.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: #3B82F6;
    color: #FFFFFF;
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
  }
`;

const Contact = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <SectionTitle
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          Let's Connect
        </SectionTitle>
        <SectionSubtitle>
          Whether you have a project in mind or just want to chat about technology,
          I'm always excited to hear from like-minded people.
        </SectionSubtitle>
        
        <ContactCards>
          <ContactCard
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjaydoss737@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactMethod>Email Me</ContactMethod>
            <ContactDetail>sanjaydoss737@gmail.com</ContactDetail>
          </ContactCard>
          
          <ContactCard
            href="tel:9363121772"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactMethod>Call Me</ContactMethod>
            <ContactDetail>+91 9363121772</ContactDetail>
          </ContactCard>
        </ContactCards>
        
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/sanjay-a-950391259/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/Sanjay-asj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialLink>
        </SocialLinks>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;