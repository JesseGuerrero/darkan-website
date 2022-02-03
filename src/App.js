import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GlobalHeader from './components/global-header/GlobalHeader';
import PageRoutes from './pages/PageRoutes';

import './App.scss';

function App(props) {
  return (
    <div className='App'>
      <GlobalHeader />
      <Container>
        <Row>
          <Col md={12}>
            <div className='wrapper'>
              <PageRoutes/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;