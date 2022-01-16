import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Form,Dropdown,Button, Col, Alert,Table} from "react-bootstrap";
import web3 from "../utils/web3";

class Marketplace extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedChain: 'Ethereum',
            selectedChainId: 1,
            supportedMarkets:'OpenSea, Rarible, Foundation, Refinable, NFTrade, LooksRare',
            Collections: []
        };
        this.collectionAddress = React.createRef();
    }
    weiToEther = (t) => {
        
        var etherValue;
        if (t != null) {
            const s=parseInt(t);
            etherValue = web3.utils.fromWei(s, 'ether');
        }
        return etherValue;
    }
    fetchData = async (t) => {
        t.preventDefault();

       
            let url  ='https://api.covalenthq.com/v1/'+  this.state.slectedChainId +'/nft_market/?key=ckey_docs'
            fetch('https://api.covalenthq.com/v1/1/nft_market/?key=ckey_docs').then(res => res.json()).then(
                result => {
        
                  if(this.collectionAddress.current.value.length==0)
                  {
                    let CollRes = result.data.items.filter(item => item.collection_name != null);
                    this.setState({ Collections: CollRes });
                  }
                  else{
                    let CollRes = result.data.items.filter(item => item.collection_address == this.collectionAddress.current.value);
                    this.setState({ Collections: CollRes });
                  }
                    console.log(this.state.Collections);
                }
            )
        
    };
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
        <Table  striped bordered hover>
			  	<thead>
    				<tr>
      					
      					<th>Name</th>
      					<th>Address</th>
      					<th>AVG Volume(USD) /24h</th>
                        <th>AVG Volume(ETH) /24h</th>
                        <th>Floor Price(USD) /7d</th>
                        <th>Floor Price(ETH) /7d</th>
                        <th>Market Cap(USD)</th>
                        <th>Market Cap(ETH)</th>
                        <th>Max Price(USD)</th>
                        <th>Max Price(ETH)</th>
                        <th>Opening Date</th>
                        <th>Tokens sold</th>
                        <th>Volum(USD) /24h</th>
                        <th>Volum(ETH) /24</th>
    				</tr>
  				</thead>
				<tbody>
					{this.state.Collections.map((item) => (
						<tr> 
						
							<td>{item.collection_name}</td>
							<td>{item.collection_address}</td>
							<td>{item.avg_volume_quote_24h}</td>
                            <td>{item.avg_volume_wei_24h}</td>
                            <td>{item.floor_price_quote_7d}</td>
                            <td>{item.floor_price_wei_7d}</td>
                            <td>{item.market_cap_quote}</td>
                            <td>{item.market_cap_wei}</td>
                            <td>{item.max_price_quote}</td>
                            <td>{item.max_price_wei}</td>
                            <td>{item.opening_date}</td>
                            <td>{item.unique_token_ids_sold_count_alltime}</td>
                            <td>{item.volume_quote_24h}</td>
                            <td>{item.volume_wei_24h}</td>
						</tr>
                
                  	))}

				</tbody>
        </Table> 
            </div>
        );
    }
}

export default Marketplace;
