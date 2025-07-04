import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          {/* RIGHT SECTION FIRST (Image First for Style Flip) */}
          <HeroRightContainer>
            <Img src={HeroImg} alt="hero" />
          </HeroRightContainer>

          {/* LEFT SECTION */}
          <HeroLeftContainer>
            <Title>
              <span style={{ fontSize: '1.8rem', color: '#94A3B8' }}>Hey there 👋</span><br />
              I’m <span style={{ color: '#0EA5E9' }}>{Bio.name}</span>
            </Title>

            <TextLoop>
              A&nbsp;
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>
              {Bio.description}
            </SubTitle>

            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
              📄 Download My Resume
            </ResumeButton>
          </HeroLeftContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
