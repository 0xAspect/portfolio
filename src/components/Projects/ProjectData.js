let data ={
    'Projects': [
        {
            //Avax Nibblers minting contract data
            url: "nibblers-minting",
            title: "Avax Nibblers Minting Contract",
            tagline: "Gameified NFTs on the Avalanche blockchain",
            description: [
                "I set myself the ambitious goal of creating a blockchain NFT game from nothing.", 
                "I wanted to create an NFT which could be minted, would reward a user interacting with the protocol  and then ultimately levelled up.", 
                "The NFT would reward a second (ERC20) token by way of another smart contract keeping track of the reward properties of the NFT (without the NFT having to be staked) with rewards determined by the ‘Level’ of the NFT.", 
                "This second token could then be ‘staked’ in a pool (3rd smart contract) and the user rewarded with a third (ERC20) token.", 
                "The third token could then be sent to the NFT smart contract in order to be burned and the NFT levelled up"],
            tech: ["Solidity", "EVM", "NFT", "ERC721", "DeFi", "AvalancheGo", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
            features: {"description": 'The minting contract is ERC721 compliant however significantly extents the functionality of the standard to include features such as:', 
            "features": 
            ['Split mint and reveal', 'Reward gathering and interfacing with appropriate external contracts', 'On-blockchain level information', 'Amended metadata', 'IPFS compatibility', 'Custom reveal amounts (returning a different metadata setbased on NFT id)', 'Custom max NFTs (up to an upper limit)',
            'Mappings for NFT level and the timestamp of the mint']},
            links: {
                "github": "https://github.com/0xAspect/NibblersSol/blob/main/factoryNFTv2.sol", 
                "blockscanner": "https://snowtrace.io/address/0x1e6eb10b84a0b79b82ddc42364159f88651a9135",
                "frontend": "https://avaxrats.xyz",}
        },{
        
            //Avax Nibblers staking contract data
            url: "nibblers-farming",
            title: "Avax Nibblers Farming Contract",
            description: "Farming contract for Avax Nibblers",
            tech: ["Solidity", "EVM", "Truffle", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
        },{
            url: "nibblers-staking",
            title: "Avax Nibblers Staking Contract",
            description: "Staking contract for Avax Nibblers",
            tech: ["Solidity", "EVM", "Truffle", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
        }, {
            url: "rat-dao",
            title: "Rat Dao",
            description: "Staking contract for Avax Nibblers",
            tech: ["Solidity", "EVM", "Truffle", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
        }
    ]
} 

export default data;