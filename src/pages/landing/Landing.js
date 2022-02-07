import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Landing.scss';

function Landing(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            saepe sint voluptatum?
          </p>
        </Col>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, voluptas. Enim, fuga!
          </p>
        </Col>
        <Col>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            atque hic corrupti.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;