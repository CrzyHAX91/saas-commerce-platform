from web3 import Web3
import pandas as pd
import matplotlib.pyplot as plt

w3 = Web3(Web3.HTTPProvider("https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"))

def get_contract_transactions(contract_address):
    # Dit is een mockfunctie, want echte blockchain scanning vereist een gespecialiseerde API
    mock_data = {
        "transaction_hash": ["0x123", "0x456", "0x789"],
        "from": ["0xabc", "0xdef", "0xghi"],
        "to": [contract_address, contract_address, contract_address],
        "value_eth": [0.5, 1.2, 3.0]
    }
    df = pd.DataFrame(mock_data)
    df.plot(kind='bar', x="transaction_hash", y="value_eth", title="NFT Transacties")
    plt.savefig("transactions_chart.png")
    return df.to_dict()
