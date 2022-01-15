import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


class NFTCardData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nftPopup: false
        };
    }
    handleClose = () => {
        this.setState({ nftPopup: false });
    }
    viewNFTCollection = () => {
        this.setState({ nftPopup: true });
    }
    render() {

        return (
            <div>
                <br></br>
                <div class="col xs = {3}" key={this.props.index}>
                    <div class="container" >
                        <Card style={{ flex: 1 }} >
                        <div id="yourContainer">
                                <Card.Img variant="top" src={this.props.NFT.external_data.image} alt="" />
                            </div>
                            <Card.Body>

                                <Card.Text>
                                token_id: {this.props.NFT.token_id}</Card.Text>
                                <Card.Text>
                                token_url: {this.props.NFT.token_url}</Card.Text>

                                <Button variant="secondary" onClick={this.viewNFTCollection}>View NFTs</Button>
                                 
                            </Card.Body>
                        </Card>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default NFTCardData;