import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import GlobalHeader from './components/GlobalHeader';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Index extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <GlobalHeader />
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className='wrapper'>
                                    <Switch>
                                        <Route exact path='/' component={Landing} />
                                        {/* <Route path='/download' component={Download} />
                                        <Route path='/account/create' component={SignUp} />
                                        <Route path='/skillcalc/:skill' component={SkillCalculator} /> */}
                                    </Switch>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;