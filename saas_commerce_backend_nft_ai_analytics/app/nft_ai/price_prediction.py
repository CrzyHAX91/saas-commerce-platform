import numpy as np
import joblib
from sklearn.linear_model import LinearRegression

# Voorbeeld dataset van NFT-prijzen op basis van populariteit en zeldzaamheid
X_train = np.array([[100, 1], [250, 2], [500, 3], [1000, 5], [2000, 8]])
y_train = np.array([0.1, 0.5, 1.2, 2.5, 5.0])  # NFT-prijs in ETH

# Train een simpel AI-model voor prijsvoorspelling
model = LinearRegression()
model.fit(X_train, y_train)
joblib.dump(model, "nft_price_model.pkl")

def predict_nft_price(popularity, rarity):
    loaded_model = joblib.load("nft_price_model.pkl")
    return loaded_model.predict([[popularity, rarity]])[0]
