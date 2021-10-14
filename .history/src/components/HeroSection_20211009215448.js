import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import './HeroSection.css';
import { Car } from './productTrangchu/Car';

function HeroSection() {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* CArosel */}
          <Col sm={8}>
            <Car />
          </Col>
          <Col sm={4}>
            <Container fluid>
              <Row>
                <Col sm>
                  
                </Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
