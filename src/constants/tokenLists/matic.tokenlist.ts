export const MATIC_TOKEN_LIST = {
  name: 'KyberSwap Token List',
  keywords: ['kyberswap', 'dmmexchange'],
  timestamp: '2020-12-12T00:00:00+00:00',
  tokens: [
    {
      chainId: 137,
      address:
        process.env.REACT_APP_MAINNET_ENV === 'staging'
          ? '0x51E8D106C646cA58Caf32A47812e95887C071a62'
          : '0x1C954E8fe737F99f68Fa1CCda3e51ebDB291948C',
      symbol: 'KNC',
      name: 'Kyber Network Crystal',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      symbol: 'ETH',
      name: 'Ether',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      symbol: 'USDC',
      name: 'USDC',
      decimals: 6,
    },
    {
      chainId: 137,
      address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      symbol: 'USDT',
      name: 'USDT',
      decimals: 6,
    },
    {
      chainId: 137,
      address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      symbol: 'DAI',
      name: 'DAI',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      symbol: 'WMATIC',
      name: 'Wrapped Matic',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x3A3e7650f8B9f667dA98F236010fBf44Ee4B2975',
      symbol: 'XUSD',
      name: 'xDollar Stablecoin',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x3Dc7B06dD0B1f08ef9AcBbD2564f8605b4868EEA',
      symbol: 'XDO',
      name: 'xDollar',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c',
      symbol: 'jEUR',
      name: 'Jarvis Synthetic Euro',
      decimals: 18,
      logoURI: 'https://i.imgur.com/92uhfao.png',
    },
    {
      chainId: 137,
      address: '0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c',
      symbol: 'jGBP',
      name: 'Jarvis Synthetic British Pound',
      decimals: 18,
      logoURI: 'https://i.imgur.com/HS7BMfs.png',
    },
    {
      chainId: 137,
      address: '0xbD1463F02f61676d53fd183C2B19282BFF93D099',
      symbol: 'jCHF',
      name: 'Jarvis Synthetic Swiss Franc',
      decimals: 18,
      logoURI: 'https://i.imgur.com/Fp31dDB.png',
    },
    {
      chainId: 137,
      address: '0x00e5646f60AC6Fb446f621d146B6E1886f002905',
      symbol: 'RAI',
      name: 'Rai Reflex Index',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/14004/small/RAI-logo-coin.png?1613592334',
    },
    {
      chainId: 137,
      address: '0xfAdE2934b8E7685070149034384fB7863860D86e',
      symbol: 'AUR-0112',
      name: 'Aureus',
      decimals: 18,
      logoURI: 'https://i.imgur.com/PyipL43.png',
    },
    {
      chainId: 137,
      address: '0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE',
      symbol: 'PGX',
      name: 'Pegaxy Stone',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xc1c93D475dc82Fe72DBC7074d55f5a734F8cEEAE/logo.png',
    },
    {
      chainId: 137,
      address: '0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc',
      symbol: 'VIS',
      name: 'Vigorus',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/stevepegaxy/assets/master/blockchains/polygon/assets/0xcC1B9517460D8aE86fe576f614d091fCa65a28Fc/logo.png',
    },
    {
      chainId: 137,
      address: '0x6Fb2415463e949aF08ce50F83E94b7e008BABf07',
      symbol: 'AUR-FEB22',
      name: 'Aureus',
      decimals: 18,
    },
    {
      chainId: 137,
      address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
      symbol: 'AVAX',
      name: 'Avalanche Token',
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7/logo.png',
    },
    {
      chainId: 137,
      address: '0x5c4b7CCBF908E64F32e12c6650ec0C96d717f03F',
      symbol: 'BNB',
      name: 'Binance Token',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    },
    {
      chainId: 137,
      address: '0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5',
      symbol: 'FTM',
      name: 'Fantom Token',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
    },
    {
      chainId: 137,
      address: '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4',
      symbol: 'SOL',
      name: 'SOL',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
    },
    {
      chainId: 137,
      address: '0xf2D8124b8F9267DaD61351c7aD252362880C6638',
      symbol: 'WCRO',
      name: 'Wrapped CRO',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14532.png',
    },
    {
      chainId: 137,
      address: '0x80c0CBDB8d0B190238795d376f0bD57fd40525F2',
      symbol: 'WONE',
      name: 'Wrapped ONE',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11696.png',
    },
    {
      chainId: 137,
      address: '0xC25351811983818c9Fe6D8c580531819c8ADe90f',
      symbol: 'IDLE',
      name: 'Idle (PoS)',
      decimals: 18,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7841.png',
    },
    {
      chainId: 137,
      address: '0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95',
      symbol: 'RIKEN',
      name: 'RIKEN',
      decimals: 18,
      logoURI: 'https://i.imgur.com/o914JpY.jpg',
    },
    {
      chainId: 137,
      address: '0x9F994e2783b44C83204377589854A17c6b0c226d',
      symbol: 'RIGY',
      name: 'RIGY',
      decimals: 18,
      logoURI: 'https://i.imgur.com/0uZyC7M.png',
    },
  ],
  version: {
    major: 0,
    minor: 0,
    patch: 0,
  },
}
