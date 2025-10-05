---
title: Probability of Default Scorer (PDScorer) 
slug: pd-scorer 
description:
category: Quant
tags: [Python, Scikit-learn, XGBoost, SHAP, Credit-Risk] 
imageUrl: "/asset/PD.PNG" 
createdAt: "2023-09-23T00:00:00Z"
githubUrl: https://github.com/AmineOuerfellii/quantitative-finance 
liveUrl:
featured: false
---
PDScorer is a Jupyter Notebook project that develops a machine learning-based model to estimate the probability of default (PD) for credit risk assessment. Written in Python, it utilizes Scikit-learn for logistic regression and XGBoost for advanced ensemble modeling, with Pandas and NumPy for data processing. The notebook includes feature engineering to derive financial ratios, data cleaning to handle imbalanced datasets, and hyperparameter tuning via GridSearchCV. Visualizations with Matplotlib and SHAP explain model predictions, enhancing interpretability for risk analysts. The project outputs PD scores as a CSV file and includes a validation module to assess model performance using ROC-AUC metrics.