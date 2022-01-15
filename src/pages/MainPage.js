import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import history from '../utils/history';
import '../App.css';
import donate from '../donate.png';
import { Row } from "react-bootstrap";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdminUser: false,
            selectedAccoutnt: "0x0000000000000000000000000000000000000000"
        };
    }
    componentDidMount() {
        // setInterval(async () => {
        //     const accounts = await window.ethereum.enable();
        //     const account = accounts[0];
        //     this.setState({ selectedAccoutnt: account });
        // }, 1000)
    }

    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h2> NFT Crawler Dashboard </h2>
                </div>
                <h7>  MM Account: {this.state.selectedAccoutnt}  </h7>
                <Row>
                    <Col xs={9}>
                        <Form className="d-flex">
                            <FormControl
                                type="searchAddress"
                                placeholder="Address"
                                className="me-2"
                                aria-label="searchAddress"
                            />
                            <FormControl
                                type="Chain"
                                placeholder="Chain"
                                className="me-2"
                                aria-label="Chain"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                    <Col xs={3}>
                        <div class="card shadow mb-4">
                            <div class="card-body">
                                <Image src={donate} thumbnail />

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default MainPage;