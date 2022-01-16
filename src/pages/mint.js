import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Mint extends Component {
  listAll = async (lnft) => {
    fetch('https://api.nftport.xyz/v0/me/mints?chain=polygon', {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "9dd184c0-2c6f-46a0-ac99-bbf92cf18951"
      }
    })

      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {

    return (
      <div>
        <Form >
          <Form.Group as={Row} className="mb-3" controlId="formKB9Response">
            <Form.Label column sm="2">
              Input Address:
                </Form.Label>
            <Col sm="5">
              <Form.Control type="searchAddress" placeholder="Address" ref={this.searchAddress} />
            </Col>
          </Form.Group>
          <br></br>
          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3" controlId="formKB9Response">
                <Form.Label column sm="4">
                  NFT Name:
                </Form.Label>
                <Col sm="3">
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formKB9Response">
                <Form.Label column sm="4">
                  NFT Description:
                </Form.Label>
                <Col sm="3">
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formKB9Response">
                <Form.Label column sm="4">
                  File URL:
                </Form.Label>
                <Col sm="3">
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" onClick={this.fetchData}>Mint</Button>
            </Col>
          </Row>
          <Button variant="primary" onClick={this.listAll}>
            list All Your Minted NFTs
	        </Button>



        </Form>

      </div>

    )
  }

}
export default Mint;
