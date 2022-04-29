const {ethers} = require("ethers");
// import {ethers} from "ethers";


async function connect() {
    if (window.ethereum !== "undefined") {
        await ethereum.request({method: "eth_requestAccounts"})
    }
}

async function read() {
    const address = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
        const abi =  [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "_favoriteNumber",
                  "type": "uint256"
                }
              ],
              "name": "addPerson",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "name": "nameToFavoriteNumber",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "people",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "favoriteNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "retrieve",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_favoriteNumber",
                  "type": "uint256"
                }
              ],
              "name": "store",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(address, abi, signer)
        const value = await contract.retrieve()
        console.log(value.toString())
}

async function store() {
    if (typeof window.ethereum !== "undefined") {
        // address
        // abi
        const address = "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65";
        const abi =  [
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "_favoriteNumber",
                  "type": "uint256"
                }
              ],
              "name": "addPerson",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "name": "nameToFavoriteNumber",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "people",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "favoriteNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "retrieve",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_favoriteNumber",
                  "type": "uint256"
                }
              ],
              "name": "store",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(address, abi, signer)
        try {       
            await contract.store(77)
        } catch {
            console.log("error")
        }
    }
}

module.exports = {
    connect,
    store,
    read
}
