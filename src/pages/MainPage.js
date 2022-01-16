import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../App.css';
import donate from '../donate.png';
import { Row, Alert } from "react-bootstrap";
import NFTCard from '../Cards/NFTCard';
import getWeb3 from "../utils/getWeb3";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AdminUser: false,
            web3: null,
            connectedAddress: "Wallet Is Dissconnected!",
            connectedAddressStatus: "warning",
            slectedChain: 'Ethereum',
            slectedChainId: 1,
            NFTs: []
        };
        this.searchAddress = React.createRef();

        this.chains = [
            { "1": "Ethereum" }, { "137": "Polygon" }
        ];
    }
    componentDidMount = async () => {

        try {

            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            this.setState({ connectedAddressStatus: "success", web3, connectedAddress: 'Connected Address: ' + accounts[0], account: accounts[0] });
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

    fetchData = async (t) => {
        t.preventDefault();
        let url = 'https://api.covalenthq.com/v1/' + this.state.slectedChainId + '/address/' + this.searchAddress.current.value + '/balances_v2/?nft=true&key=ckey_docs'
        fetch(url).then(res => res.json()).then(
            result => {
                console.log(result.data.items);
                let NFTRes = result.data.items.filter(item => item.nft_data != null)
                console.log(NFTRes);
                this.setState({ NFTs: NFTRes });
            }
        )
    };
    setChain = async (e) => {
        console.log(e);
        this.setState({ slectedChainId: e });
        switch (e) {
            case '1':
                console.log(e);
                this.setState({ slectedChain: "Ethereum" });
                break;
            case '137':
                console.log(e);
                this.setState({ slectedChain: "Polygon" });
                break;
            case '97':
                console.log(e);
                this.setState({ slectedChain: "Binance Smart Chain" });
                break;
            case '43114':
                console.log(e);
                this.setState({ slectedChain: "Avalanche" });
                break;
        }
        console.log(this.slectedChain);
    };
    render() {

        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <h2> NFT Crawler </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>

                        <Alert variant={this.state.connectedAddressStatus}>{this.state.connectedAddress}</Alert>
                    </Col>
                </Row>
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
                                    Select Chain:
                </Form.Label>
                                <Col sm="3">
                                    <Dropdown onSelect={this.setChain}>
                                        <Dropdown.Toggle variant="success" id="dropdown-chain">
                                            {this.state.slectedChain}
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
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" onClick={this.fetchData}>Search</Button>
                        </Col>
                    </Row>
                </Form>
                {/* <CardDeck tyle={{ display: 'flex', flexDirection: 'row' }}>
                            {NFTCards}
                        </CardDeck > */}
                {this.state.NFTs.map((NFT, index) => (
                    <NFTCard NFT={NFT} id={index} key={index} chainId={this.state.slectedChainId} />))}


            </div>
        )
    }
};

export default MainPage;
