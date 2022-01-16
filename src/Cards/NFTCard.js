import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import NFTCardData from '../Cards/NFTCardData';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


class NFTCard extends Component {
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
                <div className="col xs = {3}" key={this.props.id}>
                    <div className="container" >
                        <Card style={{ flex: 1 }} >
                            <Card.Title>
                                contract name: {this.props.NFT.contract_name}
                            </Card.Title>
                            <Card.Body>
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
                        <Modal show={this.state.nftPopup} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.props.NFT.contract_name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><div className="card shadow mb-4">
                                <div className="form-row">
                                    {this.props.NFT.nft_data.map((NFT, index) => (
                                        <NFTCardData NFT={NFT} id={index} key={index} contract_name={this.props.NFT.contract_name}contract_address={this.props.NFT.contract_address} chainId={this.props.chainId}/>))}
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose} disabled={false}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default NFTCard;