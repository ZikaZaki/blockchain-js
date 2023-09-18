import CryptoJS from 'crypto-js';

const SHA256 = CryptoJS.SHA256;

class Block {

  constructor(data) {
    this.index = null;
    this.timestamp = new Date().getTime().toString();
    this.data = data;
    this.previousHash = '';
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log("Block mined: " + this.hash);
    console.log("Block has length: " + this.hash.length);
  }
}

export default Block;

