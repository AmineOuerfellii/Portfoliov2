---
title: Lee-Carter Volatility-Adjusted Projection (LC_VAP)
slug: lc-vap
description: Modeling and forecasting mortality rates using the Lee-Carter model with volatility-adjusted projections, applied to UK ONS life table data for actuarial and demographic analysis.
category: data & ml
tags: [Python, Pandas, NumPy, Matplotlib, SciPy, Statsmodels, Actuarial Science, Time-Series, Monte Carlo]
imageUrl: "/asset/Actuariat.PNG"
createdAt: "2021-05-02T00:00:00Z"
githubUrl: https://github.com/AmineOuerfellii/Actuariat-Acturial-Science
liveUrl:
featured: false

---

LC_VAP is a Jupyter Notebook-based project that processes UK Office for National Statistics (ONS) mortality data to model and forecast mortality rates for ages 60–90 (1980–2018) using the Lee-Carter model. It incorporates volatility-adjusted projections (VAP) via Monte Carlo simulations to compute actuarial metrics (annuities, death benefits) and risk measures (VaR, CVaR) for insurance and pension applications.



**Data Processing**: Loads and filters ONS life table data, computing average mortality rates (mx) across sexes.



**Lee-Carter Model**: Estimates age-specific (α_x, β_x) and time-varying (κ_t) parameters using SVD.



**Volatility-Adjusted Projections**: Simulates 1000 stochastic κ_t paths with ARIMA(0,1,0) for 2019–2043 forecasts.



**Actuarial Metrics**: Calculates annuity values (ax_due) and death benefits (Ax) for historical, projected, and shocked (20% mortality increase, 2020–2025) scenarios.



**Risk Analysis**: Computes VaR and CVaR at 95% confidence for stochastic annuity values.



**Visualizations**: Plots model parameters, residuals, and simulated κ_t paths.