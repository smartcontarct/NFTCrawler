import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
const data = [
  { date: 1, Vol: 10 },
  { date: 2, Vol: 20 },
  { date: 3, Vol: 1000 },
];
class MarketPlaceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slectedChainId: 1,// this.props.location.chainId,
      collectionAddress: '0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a',// this.props.location.contract_address
      data: []
    };
    
  }
  componentDidMount = async () => {
    this.fetchData();
  }
  fetchData = () => {
    let url = ' https://api.covalenthq.com/v1/' + this.state.slectedChainId + '/nft_market/collection/' + this.state.collectionAddress + '/?&key=ckey_d7c16845c96b46faa332ad48885'
    fetch(url).then(res => res.json()).then(
      result => {
        console.log(result.data.items);
        var datal = [];
        for (var i = 90; i > 0 ; i-10) {
          //console.log(result.data.items[i].opening_date);
          //console.log(result.data.items[i].volume_wei_day);
          datal.push({'date':result.data.items[i].opening_date,'Vol':result.data.items[i].floor_price_wei_7d});
        }
        this.setState({data :datal});
        console.log(this.state.data);
      }
    )
  };
  render() {

    return (
      <div>
        <Row>
          <div className="card">
            <Chart
              data={this.state.data}
            >
              <ArgumentAxis />
              <ValueAxis />

              <LineSeries valueField="Vol" argumentField="date" />
            </Chart>
          </div>
        </Row>
      </div>

    )
  }
};

export default MarketPlaceDetail;

