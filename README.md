# blockchain-js ⛓️

This repository contains a simple implementation of a blockchain in JavaScript.

## Overview

A blockchain is a distributed and decentralized digital ledger that is used to record transactions across multiple computers. Each transaction is grouped into blocks, which are linked together using cryptographic hashes, forming a chain of blocks.

This example demonstrates the core concepts of a blockchain, including block creation, transaction validation, and chain integrity verification.

## Prerequisites

- Node.js (version 1.0.0 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blockchain-js.git
   ```

.2 Navigate to the project directory:

  ```bash
  cd blockchain-js
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

4. Run the example:

  ```bash
  node index.js
  ```

5. Explore the code in index.js to understand the implementation details of the blockchain.

## Example Output
Upon running the example, you should see output similar to the following:

```apache
--- Block 1 ---
Timestamp: 1631477945000
Previous Hash: 0000000000000000000000000000000000000000000000000000000000000000
Hash: 7a93216d3e5a2e62b7b7a6eaa6b7a6e9a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6
Data: { amount: 10 }

--- Block 2 ---
Timestamp: 1631477945000
Previous Hash: 7a93216d3e5a2e62b7b7a6eaa6b7a6e9a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6
Hash: 9a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6e6a6
Data: { amount: 5 }

```

## Contributing
Contributions are welcome! If you find a bug or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

