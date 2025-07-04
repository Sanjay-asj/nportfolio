import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const experiences = [
  // Your existing entries...
  {
    id: 5,
    title: "Metaverse Technology",
    company: "Samhita 2024 - National Level Technical Symposium, MIT",
    date: "October 2024",
    desc: "Presented a paper on the topic Metaverse in Madras Institute of Technology",
    certificate_link: "https://drive.google.com/file/d/11B-DWQquNho4vySJqidvty-ZU6UzSDtl/view?usp=sharing",
    skills: ["Public Speaking", "Concept Design"]
  },
  {
    id: 6,
    title: "Digital Forensics",
    company: "CRYPTERA 2024 - Technical Symposium, CIT",
    date: "October 2024",
    desc: "Presented a paper on Digital Forensics in Coimbatore Institute of Technology",
    certificate_link: "https://drive.google.com/file/d/1O1uGEpc6oXCmIaFZUKICG0aNYTOjK8ev/view?usp=sharing",
    skills: ["Public Speaking", "Technical Writing"]
  },
  {
    id: 7,
    title: "MongoDB Certified Associate Developer",
    company: "MongoDB, Inc.",
    date: "February 2025",
    desc: "Completed a certification on MongoDB database development",
    certificate_link: "https://learn.mongodb.com/c/AYHeTzBBRv-ddIOLVe3aDg"
  },
  {
    id: 8,
    title: "IMPULZI Coding Contest",
    company: "IEEE Communication Society",
    date: "March 2024",
    desc: "Participated in a Coding contest conducted by IEEE Communication Society",
    certificate_link: "https://drive.google.com/file/d/1VNf_BPLafIkrtqwMa2T5hZhg2W-UPSRu/view?usp=sharing",
    skills: ["Coding", "Problem Solving"]
  },
  {
    id: 9,
    title: "Cultural and Music Club, KEC",
    company: "Enthusia 2023",
    date: "February 2023",
    desc: "Won 1st prize in various events like Group dance, Skit, Mime conducted at Kongu Engineering College",
    certificate_link: "https://drive.google.com/file/d/1aXoqHmbSobw5-aj1OVRyrOdGxZV6YqHj/view?usp=sharing"
  },
  {
    id: 10,
    title: "Srishti 2024 Hackathon",
    company: "IEEE Students chapter 12951, PSG Tech",
    date: "October 2024",
    desc: "Participated in a hackathon by IEEE Students chapter 12951 in PSG College of Technology",
    certificate_link: "https://drive.google.com/file/d/1VjBzCXh6E45qTv03g-pnEhSUR3cusEXX/view?usp=sharing",
    skills: ["Teamwork", "Problem Solving"]
  }
];

const Container = styled.section`
  padding: 5rem 2rem;
  background: #0F172A;
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
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #E2E8F0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  color: #94A3B8;
  text-align: center;
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 2rem;
  
  .MuiTimeline-root {
    padding: 0;
  }
  
  .MuiTimelineItem-root:before {
    flex: 0;
    padding: 0;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: #1E293B;
  border-radius: 12px;
  padding: 1.8rem;
  border-left: 4px solid #3B82F6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #F8FAFC;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #94A3B8;
  margin-bottom: 0.8rem;
`;

const CardDate = styled.span`
  display: inline-block;
  background: #1E40AF;
  color: #EFF6FF;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #CBD5E1;
  line-height: 1.6;
  margin-bottom: 1.2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
`;

const SkillTag = styled.span`
  background: rgba(59, 130, 246, 0.15);
  color: #3B82F6;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const CertificateLink = styled(motion.a)`
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

  svg {
    font-size: 0.9rem;
  }
`;

const Experience = () => {
  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <Container id="experience">
      <Wrapper>
        <Title
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          Papers & Certifications
        </Title>
        
        
        <TimelineSection>
          <Timeline>
            {experiences.map((exp) => (
              <TimelineItem key={exp.id}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#3B82F6', boxShadow: 'none' }} />
                  {exp.id !== experiences[experiences.length - 1].id && (
                    <TimelineConnector sx={{ bgcolor: '#3B82F6', opacity: 0.3 }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                  >
                    <CardTitle>{exp.title}</CardTitle>
                    <CardSubtitle>{exp.company}</CardSubtitle>
                    <CardDate>{exp.date}</CardDate>
                    <CardDesc>{exp.desc}</CardDesc>
                    
                    {exp.skills && (
                      <SkillsContainer>
                        {exp.skills.map((skill, i) => (
                          <SkillTag key={i}>{skill}</SkillTag>
                        ))}
                      </SkillsContainer>
                    )}
                    
                    {exp.certificate_link && (
                      <CertificateLink
                        href={exp.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiExternalLink />
                        View Certificate
                      </CertificateLink>
                    )}
                  </ExperienceCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;