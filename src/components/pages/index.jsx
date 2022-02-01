import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import GlobalHeader from '../GlobalHeader';
import Landing from '../Landing';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <GlobalHeader />
        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Routes>
                  <Route exact path='/' element={<Landing />} />
                  {/* <Route path='/download' component={Download} />
                   <Route path='/account/create' component={SignUp} />
                   <Route path='/skillcalc/:skill' component={SkillCalculator} /> */}
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;