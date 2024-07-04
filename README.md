Login Page: Login page where users can securely log in using their credentials.

Register Page: User can register securely

Dashboard: After successful login, display the user's current account balance and recent
transaction history.

Balance Display: Show the user's current account balance prominently on the dashboard.

Transaction History: Display the user's recent transactions in a paginated manner, showing
details like date, amount, and transaction type.

Real-time Updates: Use WebSocket client libraries in React (e.g., Socket.IO client) to listen
for updates from the backend and automatically refresh the account balance and transaction
history in real-time.
