document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

    
        userInput.value = "";

        
        appendMessage("You", userMessage);

        
        setTimeout(() => {
            const chatbotResponse = getChatbotResponse(userMessage);
            appendMessage("Chatbot", chatbotResponse);
        }, 500);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${sender}: ${message}`;
        messageElement.classList.add(sender === "You" ? "user-message" : "bot-message");
        chatBox.appendChild(messageElement);

        
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getChatbotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("hello")) {
            return "Hello! How can I help you today?";
        } 
        else if (userMessage.includes("price")) {
            return "Can you please specify the product you want the price for?";
        } else if (userMessage.includes("order status")) {
            return "Please provide your order number to check the status.";
        } else if (userMessage.includes("shipping")) {
            return "Shipping times may vary based on your location. Please provide your zip code.";
        } else {
            return "Sorry, I didn't understand that. Can you please rephrase?";
        }
    }

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    
    sendButton.addEventListener("click", sendMessage);
});
