// Define the responses that the chatbot can give
const responses = {
    "hello": ["Hi there!", "Hello!", "Hey!"],
    "how are you": ["I'm doing well, thanks!", "I'm doing great, how about you?"],
    "what is your name": ["My name is CureNetBot.", "I'm CureNetBot!"],
    "what can you do": ["I can help you find information about health topics.", "I can answer questions you have about health."],
    "i have a fever": ["Please take an amphetamine like Dolo 650 once every 6 hours. If the fever persists please book an appointment with one of our general specialists. Have a great day!"],
    "what should i take for headache" : ["Please take an Ibuprofen or Dart. If they're not available, you can always order them from our website!"],
    "what is curenet" : ["CureNet is an online healthcare website that helps you book appointments, get prescriptions from certified doctors in the comfort of your homes!"],
    "goodbye": ["Goodbye!", "Have a great day!", "Bye!"],
    "thank you": ["You're welcome!", "No problem.", "Anytime!"]
};

// Define a function to generate responses from the chatbot
function generateResponse(userInput) {
    for (const key in responses) {
        if (userInput.toLowerCase() === key) {
            return responses[key][Math.floor(Math.random() * responses[key].length)];
        }
    }
    return "I'm sorry, I don't understand. Please ask me another question.";
}

// Add event listener to send button
const sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        // Add user message to chat history
        const chatHistory = document.getElementById("chat-history");
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = userInput;
        chatHistory.appendChild(userMessage);
        // Generate and add bot message to chat history
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = generateResponse(userInput);
        chatHistory.appendChild(botMessage);
        // Clear user input
        document.getElementById("user-input").value = "";
    }
});

// Add event listener to user input field to allow pressing "Enter" to send message
const userInput = document.getElementById("user-input");
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendBtn.click();
        event.preventDefault();
    }
});

// Start the chatbot
const chatHistory = document.getElementById("chat-history");
const botMessage = document.createElement("div");
botMessage.classList.add("message", "bot-message");
botMessage.textContent = "Hi, I'm CureNetBot. How can I help you today?";
chatHistory.appendChild(botMessage);
