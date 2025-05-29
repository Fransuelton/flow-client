# 🌊 FlowClient

## 🚀 Features

- Receive name and email via POST
- Stores data in a MySQL database
- Trigger a webhook in n8n for custom automation

## 📦 Tecnologias

- Node.js
- Express
- MySQL
- Axios
- n8n (via Webhook)
- dotenv

## 🛠️ Installation

1. **Clone the project:**

```bash
git clone git@github.com:Fransuelton/flow-client.git
cd flow-client
```

2. **Install dependencies:**

```bash
npm install
```

3. ** Configure the `.env`:**

Create a `.env` file with the variables:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=flowclient_db
N8N_WEBHOOK_URL=https://yourn8n.com/webhook/endpoint
```

1. **Create table in MySQL:**

```sql
CREATE TABLE clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

> If you are not going to use `message`, remove it from the code and table.

5. **Start the server:**

```bash
node index.js
```

Acess: [http://localhost:3000](http://localhost:3000)

## 📬 Endpoints

### POST `/client`

Sends a customer's data.

#### Body (JSON)

```json
{
  "name": "João Silva",
  "email": "joao@email.com"
}
```

## 📌 Observations

- The n8n webhook must be active and ready to receive data.
- The AI-powered auto-message functionality has been removed in this simplified flow.
