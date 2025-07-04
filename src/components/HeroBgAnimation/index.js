import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.12;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: none;
    stroke: #0EA5E9;
    stroke-width: 0.5;
    opacity: 0.5;
  }
`;

const HeroBgAnimation = () => {
  return (
    <Container>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {[...Array(5)].map((_, i) => (
          <path key={i}>
            <animate
              attributeName="d"
              dur={`${20 + i * 5}s`}
              repeatCount="indefinite"
              values={`
                M0,${10 + i * 10} 
                C20,${20 + i * 5} 40,${0 + i * 5} 60,${20 + i * 5} 
                S100,${10 + i * 10} 100,${10 + i * 10};

                M0,${15 + i * 10} 
                C20,${5 + i * 5} 40,${30 + i * 5} 60,${5 + i * 5} 
                S100,${15 + i * 10} 100,${15 + i * 10};

                M0,${10 + i * 10} 
                C20,${20 + i * 5} 40,${0 + i * 5} 60,${20 + i * 5} 
                S100,${10 + i * 10} 100,${10 + i * 10}
              `}
            />
          </path>
        ))}
      </svg>
    </Container>
  );
};

export default HeroBgAnimation;
