import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { motion } from 'framer-motion';

const Container = styled.section`
  padding: 6rem 2rem;
  background: #1E293B; /* Dark Blue */
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  text-align: center;
  background: linear-gradient(90deg, #FFFFFF, #0EA5E9);
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

const Desc = styled.p`
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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
  
  .MuiTimeline-root {
    padding: 0;
  }
  
  .MuiTimelineItem-root {
    &:before {
      flex: 0;
      padding: 0;
    }
  }
  
  .MuiTimelineDot-root {
    width: 20px;
    height: 20px;
    margin: 0;
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.2);
    background-color: #0EA5E9; /* Bright Cyan */
    border: none;
  }
  
  .MuiTimelineConnector-root {
    background-color: #0EA5E9; /* Bright Cyan */
    width: 2px;
  }
`;

const StyledEducationCard = styled(EducationCard)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(14, 165, 233, 0.2);
  }
`;

const Education = () => {
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
    <Container id="education">
      <Wrapper>
        <Title
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          Education
        </Title>
        <Desc>
          My academic journey has equipped me with knowledge and skills that fuel my passion for technology and innovation.
        </Desc>
        
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '24px', px: 2 }}>
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                  >
                    <StyledEducationCard education={edu} />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;