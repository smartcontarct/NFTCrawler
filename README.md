# NFTCrawler
<div style="text-align:center"><img src="https://github.com/smartcontarct/NFTCrawler/blob/main/public/nftcrawler.jpg" /></div>
Create an online NFT Crawler that makes possible to retrive NFT information on blockchains. User can enter see ntf information on selected blockchain.

# Represented Data
- Get a chain id and address and return current token balances along with their spot prices. We filtered NFT tokens.
- Get a chain id and return all collection addresses and their market data.
- Get a chain return a detailed view of the specified collection address and their time series data in day granularity.

# Chains
- Ethereum: MarketPlace= OpenSea, Rarible, Foundation, Refinable, NFTrade, LooksRare
- Polygon: MarketPlace= OpenSea, Refinable, NFTrade
- Binance Smart Chain: MarketPlace= Refinable, NFTrade
- Avalanche: NFTrade

## Instructions
required: [Node](https://nodejs.org/dist/latest-v12.x/), [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

You can interact with UI here:`https://black-leaf-3391.on.fleek.co/`. 

```bash

yarn start

```
This should open up the browser to `http://localhost:3000/` which you can interact with an MVP UI. 
