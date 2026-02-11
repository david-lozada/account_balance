💰 Account Balance Manager

A lightweight, "zero-dependency" financial tracker built to manage incomes and expenses. This project was developed as a practice exercise to master DOM manipulation and browser storage.
🚀 Features

    Persistent Data: Uses localStorage to save your transactions, so your data remains even after refreshing the page.

    Income & Expense Tracking: Easily add and categorize your financial movements.

    Balance Overview: Real-time calculation of total balance, total incomes, and total expenses.

    Clean UI: Leveraging Water.css for a modern, responsive look with zero custom CSS.

🛠️ Built With

    HTML5 & Vanilla JavaScript: Core logic and structure.

    Water.css: A framework-agnostic CSS library for automatic styling.

    Web Storage API: Utilizes localStorage for data persistence without a backend.

📂 How it Works

    Data Entry: Users input an amount and description.

    Storage: The app converts the data into JSON strings and stores them in the browser's localStorage.

    UI Updates: On every change, the app re-renders the list and updates the total balance by iterating through the stored array.

⚙️ Local Setup

No server? No problem.

    Clone the repository:
    Bash

    git clone https://github.com/your-username/account-balance.git

    Run the App: Simply double-click the index.html file to open it in any modern web browser.

    Resetting Data: To clear all records, you can clear your browser's site data or use the "Clear All" button (if implemented).
