# Abi to wrap

Abi to wrap is a node.js console app that can read an Ethereum smart contract abi file and generate Polywrap wrapper code for schema and AssemblyScript modules.

### Run without cloning the repo:
1. Install with "npm install -g abi-to-wrap"
3. run "wrap-persistence-node {command}"

### Run with cloning the repo:
1. Clone the repo
2. Run "nvm install && nvm use"
3. Run "yarn" to install dependencies
5. Run "yarn dev {command}" to run the commands with ts-node

### The following commands are supported:
- gen: Generate wrapper code from ABI (params: -a (path to abi file), -o (path to output dir))
- help:  Display help for command