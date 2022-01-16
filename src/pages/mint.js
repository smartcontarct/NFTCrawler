import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Mint extends Component {
	
	/*
    
    fetchData = async (t) => {
        t.preventDefault();



        fetch("https://api.nftport.xyz/v0/mints/easy/urls", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "9dd184c0-2c6f-46a0-ac99-bbf92cf18951"
  },
  "body": "{\"chain\":\"polygon\",\"name\":\"nftcrawler4\",\"description\":\"nftcrawler4\",\"file_url\":\"https://cdn-147.anonfiles.com/X4GaA7Bex4/2a3d0458-1642318471/nftc.jpg\",\"mint_to_address\":\"0x2bc3f35B61D96305F9e756Dc13125d95cD9d49cE\"}"
})
.then(response => {
  console.log(response);
  console.log(response.data.items);

})
.catch(err => {
  console.error(err);
});
*/
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
