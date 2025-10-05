---
title: Cryptocurrency Option Pricing Platform
slug: crypto-option-pricing
description: A Python-based system for real-time cryptocurrency option pricing using the Vanna-Volga model, with live data integration and interactive visualizations.
category: Quant
tags: [Python, Dash, WebSockets, Pandas, NumPy, SciPy, Cryptocurrency, Derivatives]
imageUrl: "/asset/Crypto.PNG"
githubUrl: https://github.com/AmineOuerfellii/quantitative-finance/tree/main/Projet_recherche%202024
liveUrl:
featured: true
createdAt: "2024-03-15T00:00:00Z"
---

The Cryptocurrency Option Pricing Platform is a Python-based system designed for real-time pricing and analysis of cryptocurrency options. It leverages the Vanna-Volga pricing model, augmented by Black-Scholes calculations, to deliver accurate option pricing with dynamic volatility and maturity settings.

The platform integrates with Deribit’s WebSocket API for live market data and CoinGecko for historical price feeds, using `asyncio` and `websockets` for low-latency processing. Key features include:  

- **Option Pricing Engine**: Combines Vanna-Volga and Black-Scholes for precise pricing.
- **Data Feeds**: Fetches real-time and historical data with robust error handling.
- **Order & Risk Management**: Updates bid/ask prices and performs delta hedging for portfolio stability.
- **Backtesting**: Analyzes strategies using historical data, with CSV export.
- **Interactive Dashboard**: Visualizes option prices, portfolio delta, volatility surfaces, and altcoin (e.g., XRP) volatility using Dash and Plotly.

Built with Pandas, NumPy, and SciPy, the platform ensures efficient computations and includes comprehensive logging for transparency. It’s tailored for traders and quantitative analysts, offering a powerful toolset for cryptocurrency derivatives analysis.