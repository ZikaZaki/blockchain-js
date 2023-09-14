import Block from './block.js';
import Blockchain from './blockchain.js';

let zikaCoin = new Blockchain();

console.log("Mining block 1...");
zikaCoin.addBlock(new Block({ from: 'Zack', to: 'Ali', amount: 250 }));

console.log("Mining block 2...");
zikaCoin.addBlock(new Block({ from: 'Lujain', to: 'Amat', amount: 200 }));

console.log("Mining block 3...");
zikaCoin.addBlock(new Block({ from: 'Tamim', to: 'Zack', amount: 100 }));

console.log("Mining block 4...");
zikaCoin.addBlock(new Block({ from: 'Lujain', to: 'Tamim', amount: 50 }));

// Shallow Copy
// let secondBlockchain = Object.assign({}, zikaCoin);
// let secondBlockchain = { ...zikaCoin };

// Deep Copy 
// let secondBlockchain = JSON.parse(JSON.stringify(zikaCoin));
// const _ = require('lodash');
import _ from 'lodash';
let secondBlockchain = _.cloneDeep(zikaCoin);

zikaCoin.getLatestBlock().data = { from: 'Tamim', to: 'Zack', amount: 101 };
// zikaCoin.getLatestBlock().hash = zikaCoin.getLatestBlock().calculateHash();

console.log(JSON.stringify(zikaCoin, null, 4));
console.log(JSON.stringify(secondBlockchain, null, 4));
console.log("Is blockchain valid? " + zikaCoin.isChainValid());
console.log("Is blockchain valid? " + secondBlockchain.isChainValid());
