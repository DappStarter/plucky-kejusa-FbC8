require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name remember noble exchange inflict another army genre'; 
let testAccounts = [
"0x558aaebf691ae9a2b4d61dbb379d97cfb472196ebf722d19b35402ef415ef660",
"0x3f4fb92e5890db0de2df704cc0d60392021c2b6e123f4fddc8c17be1e52684eb",
"0x9aff239e891c7d98479a88dfafb1f34222f6f42d21c181f829059123c18fa2c8",
"0xa2aec534a92d58b3f60aa2dbde78c1fd66dc65d918bfc5c7965009834324ad7e",
"0x848aaf267de3920246db581430a5d3749658a47b27dcd92d99a651d1c108e467",
"0xf963d64655102c385cef3f76cbf9d08778e26f88717d83c2a0fae53d062fc0f8",
"0xcf2255bce7684211428fdf2aa04ec665fe6ff908d52cf4622d71748ad7cddb9d",
"0x115c3c75f5004c5f7ecdfe751da883cf97e54e86015ce2f08648e470dce36f54",
"0x239d2708f3ab59f98d8fdc15e0bc8a98089e33a5639e41e604cf5e0d12cd6331",
"0x044e4a01b0262679d6dada96898e2d57b68d75274c21b4a7ad4c97931c99a2a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

