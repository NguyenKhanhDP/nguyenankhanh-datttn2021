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
                <Col sm={12}>
                  <img src="/images/sale1.jpg" alt="" />
                </Col>
                <h1>   </h1>
                <Col sm={12}>
                  <img src="/images/sale2.png" alt="" />
                </Col>
                <span></span>
                <Col sm={12}>
                  <img src="/images/honda.jpg" alt="" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
