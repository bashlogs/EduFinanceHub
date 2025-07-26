# 💼 EduFinanceHub

EduFinanceHub is a full-stack web application designed to help users manage their personal finances and gain financial literacy. It provides tools for budgeting, real-time expense tracking, stock market education, and investment analysis—all in one platform.

---

## 🚀 Features

- **📊 Dashboard**: Visual overview of your current financial status.
- **💰 Budget Management**: Tools to manage spending, set financial goals, and track progress.
- **🤖 Financial ChatBot**: Ask questions related to personal finance, investments, and market trends.
- **📈 Stock Calculator**: Calculate potential profit/loss over a specific time period.
- **🧠 Stock Sentiment Analysis**: Predicts future stock trends using sentiment analysis with three models—NLTK, ProsusAI FinBERT, and HKUST FinBERT.
- **📱 Real-Time Expense Tracker (Mobile)**: Parses your bank SMS messages and automatically logs expenses.

---

## 🧠 Machine Learning Models

### 1. **Base BERT Model**
- Pretrained on a general corpus.
- Fine-tuned on a financial headlines dataset for sentiment classification.
- Acts as the performance baseline.

### 2. **FinBERT Model (ProsusAI)**
- BERT variant pretrained on financial texts.
- Fine-tuned on financial news headlines to enhance domain-specific sentiment detection.

### 3. **HKUST FinBERT Model**
- Developed by HKUST for financial sentiment analysis.
- Fine-tuned to match and benchmark against other models.

---

## 📊 Sentiment Analysis Model Performance

| Model Type            | Model                | Negative | Neutral | Positive |
|-----------------------|----------------------|----------|---------|----------|
| Fine-tuned            | ProsusAI FinBERT     | 0.97     | 0.98    | 0.97     |
| Un-tuned              | ProsusAI FinBERT     | 0.87     | 0.91    | 0.87     |
| Only Fine-tuned       | BERT                 | 0.85     | 0.90    | 0.82     |
| Further Pretrained    | BERT                 | 0.82     | 0.90    | 0.81     |
| Fine-tuned            | HUSK FinBERT         | 0.81     | 0.88    | 0.81     |
| Un-tuned              | HUSK FinBERT         | 0.74     | 0.85    | 0.68     |

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Backend**: ExpressJS / Flask
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Machine Learning**: BERT Variants + Financial Sentiment Datasets

---

## ⚙️ Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/bashlogs/EduFinanceHub.git
```

2. Frontend Part
```bash
# Install dependencies
npm install

# To start the development server
npm start
```

3. Backend Part
```bash
# Change directory
cd backend

# Install dependencies
pip install -r requirements.txt

# To start the development server
python app.py
```

4. Login ID/Password
```
Email Id - vedika@gmail.com
Password - Vedika@2003#
```
