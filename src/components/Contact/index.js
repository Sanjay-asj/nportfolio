import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;
`;

const ContactItem = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  padding: 12px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Keep in Touch</Title>
        <Desc>
          Always happy to chat or explore new opportunities — feel free to get in touch!
        </Desc>
        <ContactLinks>
          <ContactItem 
            href="https://mail.google.com/mail/?view=cm&to=sanjaydoss737@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📧 Email: sanjaydoss737@gmail.com
          </ContactItem>

          <ContactItem href="tel:9363121772">
            📞 Call: 9363121772
          </ContactItem>
        </ContactLinks>
      </Wrapper>
    </Container>
  );
};

export default Contact;
