import React from 'react';

import Footer from './components/defaults/Footer.jsx';
import Header from './components/defaults/Header.jsx';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./stylesheets/global.scss"
import PageRoutes from "./pages/PageRoutes.jsx";

function App({props}) {
    return (
        <div className='App'>
            <Header />
            <Container fluid>
                <div className="row text-center min-vh-100">
                    <Col md={12}>
                        <div className='wrapper'>
                            <PageRoutes props={props} />
                        </div>
                    </Col>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
