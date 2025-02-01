from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"))

contract_abi = '[{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"listNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
contract_address = "0xYourNFTMarketplaceContractAddress"
contract = w3.eth.contract(address=contract_address, abi=contract_abi)

def list_nft(token_id, price, sender_address, private_key):
    nonce = w3.eth.getTransactionCount(sender_address)
    tx = contract.functions.listNFT(token_id, price).buildTransaction({
        'nonce': nonce,
        'gas': 2000000,
        'gasPrice': w3.toWei('50', 'gwei')
    })
    signed_tx = w3.eth.account.signTransaction(tx, private_key)
    tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return w3.toHex(tx_hash)
