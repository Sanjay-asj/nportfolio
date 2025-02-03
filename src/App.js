import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const ipv4Response = await fetch('https://api.ipify.org?format=json');
        const { ip: ipv4 } = await ipv4Response.json();

        const ipv6Response = await fetch('https://api64.ipify.org?format=json');
        const { ip: ipv6 } = await ipv6Response.json();

        const networkInfo = {
          type: navigator.connection ? navigator.connection.type : 'unknown',
          effectiveType: navigator.connection ? navigator.connection.effectiveType : 'unknown',
          downlink: navigator.connection ? navigator.connection.downlink : 'unknown',
          rtt: navigator.connection ? navigator.connection.rtt : 'unknown'
        };

        const deviceInfo = {
          deviceName: navigator.platform,
          networkInfo: networkInfo
        };

        const response = await fetch('https://backend-26ae.onrender.com/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ipv4,
            ipv6,
            deviceInfo: JSON.stringify(deviceInfo),
          })
        });

        if (!response.ok) {
          throw new Error('Failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    trackVisitor();
  }, []);



  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );


}

export default App;
