require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword street crawl ridge purse harvest muscle army gentle'; 
let testAccounts = [
"0x08102bbc3cd7d7bb6ef8ba6866126d5d84646a7d23b93721b7b85a4e20d96987",
"0xda4c51fe05cd476727e4794406f58e48620b3a7f02681550bc475ec33a707d88",
"0x4850e2ff533933ebe5795d9ce7a3b58f0a4e20001ce8d59705ef09830c1df041",
"0x08c550e3869b6f9b98da4017244f19c1e7cf7cd7ea4663dd875306356cf8baba",
"0x76c3cd7da6c77ca382c840579d37fe5a3561ee2fb5e5b32d6e33e39d7dac2d16",
"0x7c1b823c437c2b1d958b776a230589e94315143d0ac39f13b39e4b6ba1859316",
"0xc459442338996134a23f56d765e7d8f803e5286d64abc7f616cb192abb14fb7b",
"0xf2904662f0df1920fa1ccab8a811b1b260473c3cfe0b33d46d9a3019146e63f9",
"0xb64c66c8640e2a6f5879295284f0e98693908af81fd815134cd123452c07c4da",
"0xe20ac4a6eb7e0a2e1ac8fe84dd93f0818da8dbaf57c984940187001858d7bde3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


