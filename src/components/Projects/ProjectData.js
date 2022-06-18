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
            tagline: "Avax Nibblers - Idle NFT reward token (ERC), live on the Avalanche blockchain",
            description: [
                'As part of the Avax Nibblers game I needed to create a passive reward for holding the NFT.', 'This was achieved by creating a contract which keeps track of the level of each NFT and the time since that NFTs rewards were last harvested', 'Users can then claim their rewards in the form of an ERC20 token'],
            tech: ["Solidity", "EVM", "ERC20", "DeFi", "AvalancheGo", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
            features: {"description": 'The farming contract is ERC20 compliant however significantly extents the functionality of the standard to include features such as:', 
            "features": 
            ['Dynamic yield calculation', 'modifiable yield calculation', 'ERC20 minting function', 'multiple NFT claim', 'pausability', "ERC721 interoperability", "multiple interfaces with other live smart contracts"]},
            links: {
                "github": "https://github.com/0xAspect/AvaxNibblers-Farming-Contract/blob/main/Trinkets.sol", 
                "blockscanner": "https://snowtrace.io/address/0x9e67a8333e6b4361f758d3f1509f798af4305dd6",
                "frontend": "https://avaxrats.xyz/swarm",}
        },{
            //Avax Nibblers staking contract data
            url: "nibblers-staking",
            title: "Avax Nibblers Staking Contract",
            tagline: "Avax Nibblers - NFT Leveling and Staking reward token (ERC), live on the Avalanche blockchain",
            description: [
                'As part of the Avax Nibblers game I needed to create a token which could be used to level the NFTs. This token would be minted to users who staked the (ERC20) reward token from holding the NFT, the idea of this to be to reward users who hold their  NFT holding rewards and align the incentives of the protocol with that of the users.', 'This was achieved by creating a contract which allows users to lock their TRINK tokens.', 'Users can then claim their rewards in the form of the ERC20 NIBBLER token, which can then be used to level up the NFT.'],
            tech: ["Solidity", "EVM", "ERC20", "DeFi", "AvalancheGo", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
            features: {"description": 'The staking and farming contract is ERC20 compliant however significantly extents the functionality of the standard to include features such as:', 
            "features": 
            ['Used to increase the level of an ERC721 NFT', 'Burn on level', 'Dynamic yield calculation', 'modifiable yield calculation', 'ERC20 minting function','Custom stake and withdraw', 'automatic reward on unstake', 'Pausability', "ERC721 and ERC20 interoperability", "multiple interfaces with other live smart contracts"]},
            links: {
                "github": "https://github.com/0xAspect/AvaxNibblers-Staking-Contract/blob/main/Nibbles.sol", 
                "blockscanner": "https://snowtrace.io/address/0x1e6eb10b84a0b79b82ddc42364159f88651a9135",
                "frontend": "https://avaxrats.xyz/stake",}
        }, {
            url: "rat-dao",
            title: "Rat Dao",
            description: "Staking contract for Avax Nibblers",
            tech: ["Solidity", "EVM", "Truffle", "Hardhat", "Gananche", "Javascript", "Ethers.js"],
        }
    ]
} 

export default data;