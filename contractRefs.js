export const registryAbi = [
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "lessor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "optionId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "noOfHMTokens",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "collateral",
                    "type": "uint256"
                }
            ],
            "name": "optionCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "lessee",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "optionId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "refundAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "extraAmount",
                    "type": "uint256"
                }
            ],
            "name": "optionEnded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "lessee",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "optionId",
                    "type": "uint256"
                }
            ],
            "name": "optionTaken",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "LatestTimestamp",
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
                    "internalType": "string",
                    "name": "_code",
                    "type": "string"
                }
            ],
            "name": "addGenStation",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
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
            "inputs": [],
            "name": "checkExpiredOptions",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_code",
                    "type": "string"
                }
            ],
            "name": "checkVerifiedSensors",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderId",
                    "type": "uint256"
                }
            ],
            "name": "createBuyOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "credsMarketPrice",
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
                    "name": "_orderId",
                    "type": "uint256"
                }
            ],
            "name": "endOption",
            "outputs": [],
            "stateMutability": "payable",
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
            "name": "genStationToAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isVerified",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_sellPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_noOfHMTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_optionPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                }
            ],
            "name": "listOrder",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "name": "orderArray",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "sellPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isBuy",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isSale",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isOption",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "optionFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "optionDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "fulfilled",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "noOfHMTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "createdAt",
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
                    "name": "_value",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "redeemTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "returnHmBalance",
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
            "inputs": [],
            "name": "returnOrdersArrayLength",
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
                    "name": "_orderId",
                    "type": "uint256"
                }
            ],
            "name": "takeOnOption",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_code",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_newValue",
                    "type": "uint256"
                }
            ],
            "name": "updateHMTokenBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "updateTime",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
]

export const registryAddress = "0xa79A6326251B0051788DCa2337137afc678c2A7B";