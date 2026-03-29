# 💬 Real-Time Chat Application

A high-performance, real-time messaging platform built with **Node.js**, **Socket.io**, and **TypeScript**. This project demonstrates the implementation of asynchronous, bidirectional communication between a client and a server, featuring interactive UI elements and a robust backend.

---

## 🚀 Features

- **Real-Time Messaging**: Instant message delivery using Socket.io.
- **Typing Indicators**: Visual feedback when a user is typing a message.
- **Broadcast Notifications**: Messages are broadcasted to all connected clients except the sender.
- **Professional UI**: A sleek, responsive design powered by **Bootstrap** and custom CSS.
- **Asynchronous Data Handling**: Built with **TypeScript** for better type safety and maintainability.
- **Database Integration**: Ready-to-use **MongoDB** integration via Mongoose for data persistence.

---

## 🛠️ Tech Stack

### **Backend**
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework.
- **Socket.io**: Real-time engine for event-driven communication.
- **TypeScript**: Typed superset of JavaScript for scalable development.
- **Mongoose**: Elegant MongoDB object modeling.

### **Frontend**
- **HTML5 & CSS3**: Semantic structure and modern styling.
- **JavaScript (Vanilla)**: Efficient client-side logic.
- **Bootstrap 5**: Responsive layout and UI components.
- **Socket.io-client**: Real-time communication on the client side.

---

## 📂 Project Structure

```text
├── Client/                 # Frontend assets
│   ├── index.html          # Main chat interface
│   ├── client.js           # Real-time logic and Event Listeners
│   └── client.css          # Professional UI styling
├── Server/                 # Backend source code
│   ├── Database/           # DB connection and models
│   ├── Src/                # Source code utilities and modules
│   ├── config/             # Environment configurations
│   ├── server.ts           # Main entry point for the server
│   └── tsconfig.json       # TypeScript configuration
└── README.md               # Documentation
```

---

## ⚙️ Installation & Setup

### **1. Clone the repository**
```bash
git clone https://github.com/Abdelrahman2656/Chat-App1.git
cd Chat-App1
```

### **2. Setup the Server**
1. Navigate to the Server directory:
   ```bash
   cd Server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Server/config/` directory:
   ```env
   # Example .env content
   DATABASE_DB=mongodb://localhost:27017/chat_db
   PORT=3000
   ```
4. Start the server (Development mode):
   ```bash
   npm run build # if using tsc
   # Or use ts-node for quick start
   ts-node server.ts
   ```

### **3. Setup the Client**
Simply open the `Client/index.html` file in your preferred browser or use a Live Server.

---

## 📡 Socket Events

| Event | Direction | Description |
| :--- | :--- | :--- |
| `connection` | Client ➡️ Server | Triggered when a new user connects. |
| `chatMsg` | Client ➡️ Server | Sends a message from the client. |
| `reply` | Server ➡️ Client | Broadcasts the received message to others. |
| `typing` | Client ➡️ Server | Informs the server that a user is typing. |
| `userStartType` | Server ➡️ Client | Displays typing indicator to other users. |
| `StopType` | Client ➡️ Server | Informs the server that a user stopped typing. |
| `userStopType` | Server ➡️ Client | Hides typing indicator from other users. |

---

## 📸 Preview

*(Add your project screenshots here to wow your visitors!)*

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).

---

Developed with ❤️ by [Abdelrahman](https://github.com/Abdelrahman2656)
