import React from 'react';

import PageRoutes from "./pages/PageRoutes";
import "./stylesheets/_globals.scss"
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter/GlobalFooter";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//TODO: Player page, make match with front end
//TODO: Add experienced gained ability
//TODO: Add pagination limits based on available players.
//TODO: Rank by exp gained as well

function App({props}) {
  return (
      <div className='App'>
          <GlobalHeader />
          <Container fluid>
              <div className="row text-center min-vh-100">
                  <Col md={12}>
                      <div className='wrapper'>
                         <PageRoutes props={props} />
                      </div>
                  </Col>
              </div>
          </Container>
          <GlobalFooter />
      </div>
  );
}

export default App;
