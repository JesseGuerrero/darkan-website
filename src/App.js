import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Routes, Route } from 'react-router-dom';

import GlobalHeader from './components/global-header/GlobalHeader';
import Landing from './pages/landing/Landing';
import Download from './pages/download/Download';

import './App.scss';

function App(props) {
  return (
    <div className='App'>
      <GlobalHeader />
      <Container>
        <Row>
          <Col md={12}>
            <div className='wrapper'>
              <Routes>
                <Route exact path='/' element={<Landing/>} />
                <Route path='/download' element={<Download/>} />
                {/* <Route path='/account/create' component={SignUp} />
                   <Route path='/skillcalc/:skill' component={SkillCalculator} /> */}
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;