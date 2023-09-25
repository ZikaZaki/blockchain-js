import Block from './block.js';

class Blockchain{
  constructor(){
    this.difficulty = 2;
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const genesisBlock = new Block("Genesis Block");
    genesisBlock.index = 0;
    genesisBlock.previousHash = "0012genesis345block678";
    genesisBlock.mineBlock(this.difficulty);
    return genesisBlock;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    if(!this.isChainValid()){
      throw new Error('Blockchain is not valid');
    }
    newBlock.index = this.chain.length;
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i-1];

      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false;
      }
    }

    return true;
  }
}

export default Blockchain;
