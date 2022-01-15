import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Form,Dropdown,Button, Col, Alert} from "react-bootstrap";

class Marketplace extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedChain: 'Ethereum',
            selectedChainId: 1,
            supportedMarkets:'OpenSea, Rarible, Foundation, Refinable, NFTrade, LooksRare',
            NFTs: []
        };
        this.collectionAddress = React.createRef();
    }
    setChain = async (e) => {
        console.log(e);
        this.setState({ selectedChainId: e });
        switch (e) {
            case '1':
                console.log(e);
                this.setState({ selectedChain: "Ethereum",supportedMarkets:'OpenSea, Rarible, Foundation, Refinable, NFTrade, LooksRare' });
                break;
            case '137':
                console.log(e);
                this.setState({ selectedChain: "Polygon",supportedMarkets:'OpenSea, Refinable, NFTrade' });
                break;
            case '97':
                console.log(e);
                this.setState({ selectedChain: "Binance Smart Chain",supportedMarkets:'Refinable, NFTrade' });
                break;
            case '43114':
                console.log(e);
                this.setState({ selectedChain: "Avalanche",supportedMarkets:'NFTrade' });
                break;
        }
        console.log(this.selectedChain);
    };
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h2> NFT Marketplace  </h2>
                    <br></br>
                </div>
                <h5>Supported Markets:</h5>
                <div className="row row-content">
			        <div className="col-md-5">
				        <Alert variant='info'>{this.state.supportedMarkets}</Alert>
			        </div> 
		        </div>
                <Form >
            <Form.Group as={Row} className="mb-3" controlId="addr">
                <Form.Label column sm="2">
                    Collection Address:
                </Form.Label>
                <Col sm="5">
                    <Form.Control type="collectionAddress" placeholder="Address" ref={this.collectionAddress} />
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row} className="mb-3" controlId="formKB9Response">
                <Form.Label column sm="2">
                    Select Chain:
                </Form.Label>
                <Col sm="3">
                <Dropdown  onSelect={this.setChain}>
                    <Dropdown.Toggle variant="success" id="dropdown-chain">
                        {this.state.selectedChain}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Ethereum</Dropdown.Item>
                        <Dropdown.Item eventKey="137">Polygon</Dropdown.Item>
                        <Dropdown.Item eventKey="97">Binance Smart Chain</Dropdown.Item>
                        <Dropdown.Item eventKey="43114">Avalanche</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.fetchData}>
		        Search
	        </Button>
        </Form>
            </div>
        );
    }
}

export default Marketplace;
