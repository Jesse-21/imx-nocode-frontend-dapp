// it is not recommended to edit this configuration directly, use the provided UI instead
export default {
    appNetwork: 'ropsten',
    // Alcehmy API key
    alchemyApiKey: '', // e.g. https://eth-mainnet.alchemyapi.io/v2/your_api_key
    alchemyApiKeyRopsten: '', // e.g. https://eth-ropsten.alchemyapi.io/v2/your_api_key
    // Immutable X Generic Configurations
    // to submit a new contract for registration on immutable x use: https://submitcontract.x.immutable.com/
    linkSDK: 'https://link.x.immutable.com',
    linkSDKRopsten: 'https://link.ropsten.x.immutable.com',
    publicApiUrl: 'https://api.x.immutable.com/v1',
    publicApiUrlRopsten: 'https://api.ropsten.x.immutable.com/v1',
    publicApiUrlV2: 'https://api.x.immutable.com/v2',
    publicApiUrlV2Ropsten: 'https://api.ropsten.x.immutable.com/v2',
    // Use this when registering the contract in Remix
    imxRegistrationContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
    imxRegistrationContractAddressRopsten: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    // use this in backend minter
    imxContractAddress: '0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c',
    imxContractAddressRopsten: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    // etherscan api
    etherscanApiKey: '',
    etherscanApi: 'https://api.etherscan.io/api',
    etherscanApiRopsten: 'https://api-ropsten.etherscan.io/api',
    infuraApiUrl: 'https://mainnet.infura.io/v3/your_api_key',
    infuraApiUrlRopsten: 'https://ropsten.infura.io/v3/your_api_key',
    // Address of your registered contract on Immutable X
    // Your contract address mainnet
    tokenContractAddress: '',
    // frontend configuration
    mintCost: 0.04,
    maxMintsForUser: 1000000,
    whitelistedAddresses: [],
    depositWalletAddress: '',
    endSaleAtDepositAmount: 0, // leave this to 0 for no limit
    isMintingEnabled: false,
    whitelistOnly: false,
    backgroundColor: '#070D2B',
    textColor: '#6BF6F0',
    textSize: '',
    buttonBackgroundColor: '#f900ff',
    buttonColor: '#FFFFFF',
    logoMaxWidth: 'auto',
    pageHeading: '',
    mintButton: 'rounded', // rounded, rectangular
    mintButtonLabel: 'Mint',
    currentPriceLabel: '',
    countdownDate: '',
    headerLinks: [],
}