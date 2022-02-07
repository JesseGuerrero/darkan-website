import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Highscores.scss';

import agility from './skill-icons/Agility-icon.png'; 

function Highscores(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p style={{ backgroundImage: `url(${agility})` }}>
            Holy moly we love Agility. Isn't it the best skill on the planet wow wouldn't that be sick to just
            keep on doing agility over and over and over again?
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

export default Highscores;