oraclex/
│
├── frontend/
├── backend/
├── blockchain/
├── docs/
├── .gitignore
├── README.md
└── package.json   # optional root scripts


frontend/
├── public/
│   ├── index.html
│   └── assets/
│       ├── textures/
│       ├── models/
│       └── icons/
│
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── routes.jsx
│   │   └── layout.jsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── market/
│   │   │   ├── MarketCard.jsx
│   │   │   ├── MarketList.jsx
│   │   │   └── MarketDetails.jsx
│   │   │
│   │   ├── betting/
│   │   │   ├── BetModal.jsx
│   │   │   └── OddsDisplay.jsx
│   │   │
│   │   └── three/
│   │       ├── Scene.jsx
│   │       ├── MarketRoom.jsx
│   │       ├── OutcomePillars.jsx
│   │       └── Controls.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Markets.jsx
│   │   ├── MarketView.jsx
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/
│   │   ├── useWallet.js
│   │   ├── useContract.js
│   │   └── useMarkets.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── wallet.js
│   │   └── contracts.js
│   │
│   ├── store/
│   │   ├── index.js
│   │   └── marketSlice.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── format.js
│   │
│   └── main.jsx
│
├── tailwind.config.js
├── vite.config.js
└── package.json



backend/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   │   └── web3.js
│   │
│   ├── routes/
│   │   ├── market.routes.js
│   │   ├── user.routes.js
│   │   └── resolve.routes.js
│   │
│   ├── controllers/
│   │   ├── market.controller.js
│   │   ├── user.controller.js
│   │   └── resolve.controller.js
│   │
│   ├── services/
│   │   ├── market.service.js
│   │   ├── oracle.service.js
│   │   └── blockchain.service.js
│   │
│   ├── models/
│   │   ├── Market.model.js
│   │   ├── User.model.js
│   │   └── Transaction.model.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimiter.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   ├── validator.js
│   │   └── constants.js
│   │
│   └── jobs/
│       ├── marketExpiry.job.js
│       └── resolution.job.js
│
├── tests/
│   ├── market.test.js
│   └── auth.test.js
│
├── .env
├── package.json
└── README.md



blockchain/
├── contracts/
│   ├── OracleUSD.sol
│   ├── MarketFactory.sol
│   ├── PredictionMarket.sol
│   ├── Resolver.sol
│   └── interfaces/
│       ├── IOracleUSD.sol
│       └── IPredictionMarket.sol
│
├── scripts/
│   ├── deploy.js
│   ├── mintOracleUSD.js
│   └── createMarket.js
│
├── test/
│   ├── OracleUSD.test.js
│   ├── MarketFactory.test.js
│   └── PredictionMarket.test.js
│
├── artifacts/
├── cache/
│
├── hardhat.config.js
├── .env
└── package.json
