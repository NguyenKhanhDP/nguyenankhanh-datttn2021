import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <Container fluid>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
