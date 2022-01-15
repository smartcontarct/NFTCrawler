import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import '../App.css';


class NFTCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {

        return (
            <div>
                <br></br>
                <div class="col xs = {3}" key={this.props.index}>
                    <div class="container" >
                        <Card style={{ flex: 1 }} >
                            <Card.Body>

                                <Card.Text>
                                contract name: {this.props.NFT.contract_name}</Card.Text>
                                <Card.Text>
                                contract_address: {this.props.NFT.contract_address}</Card.Text>
                                <Card.Text>
                                last_transferred_at: {this.props.NFT.last_transferred_at}</Card.Text>
                                <Card.Text>nft count: {this.props.NFT.nft_data.length}</Card.Text>
                                {/* <Card.Text>
                                    active: {this.props.asset[5]}</Card.Text> */}


                                <Button variant="secondary" onClick={this.viewNFTCollection}>View NFTs</Button>
                                 
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>
        )
    }
}

export default NFTCard;