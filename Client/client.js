const socket = io("http://localhost:3000/");
const chatInput = document.getElementById('chatInput');
const chatBody = document.querySelector('.card-body');
const typingIndicator = document.getElementById('typing-indicator');

// Function to send a message
function sendMsg() {
    const message = chatInput.value.trim();
    if (message) {
        console.log("Sending message:", message);
        socket.emit('chatMsg', message);
        chatInput.value = '';
        addMessageToChat(message, 'sent');
    }
}

// Function to add a message to the chat interface
function addMessageToChat(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('d-flex', 'flex-row', 'justify-content-' + (type === 'sent' ? 'end' : 'start'), 'mb-4', 'message-container');

    const messageContent = document.createElement('div');
    messageContent.innerHTML = `
        <p class="message ${type}">${message}</p>
        <p class="message-time ${type === 'sent' ? 'text-end' : ''}">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    `;

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = type === 'sent' 
        ? 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp' // Sender avatar
        : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp'; // Receiver avatar
    avatar.alt = 'avatar';

    if (type === 'received') {
        messageContainer.appendChild(avatar);
    }
    messageContainer.appendChild(messageContent);
    if (type === 'sent') {
        messageContainer.appendChild(avatar);
    }

    chatBody.appendChild(messageContainer);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Listen for the "Enter" key in the input field
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMsg();
    }
});

// User starts typing
chatInput.addEventListener('input', () => {
    socket.emit('typing');
});

// User stops typing
let typingTimeout;
chatInput.addEventListener('keyup', () => {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        socket.emit('StopType');
    }, 500); 
});


socket.on('userStartType', () => {
    typingIndicator.style.display = 'flex'; 
});


socket.on('userStopType', () => {
    typingIndicator.style.display = 'none'; r
});


socket.on('reply', (msg) => {
    addMessageToChat(msg, 'received');
});