import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FullWidthSlider from '../component/slider/index.jsx';
const Home = () => (
  <>
     
    <Row backgroundColor="#2d353b">
      <Col md={12}>
         <FullWidthSlider />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
         <HeroSection />
      </Col>
    </Row>


    
    
  </>
);

export default Home;
