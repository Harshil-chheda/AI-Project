const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    displayMessage("You: " + userInput);
    const response = getResponse(userInput.toLowerCase());
    displayMessage("Alien Bot: " + response);
    document.getElementById("user-input").value = "";
}

function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

function getResponse(userInput) {
    // You'll need to modify this part to actually call the RuleBot class and get the response
    // For simplicity, let's assume we have a global ruleBot object
    // const rbot = ruleBot(); // Replace this with your actual code
    // return rbot.match_reply(userInput);
    return "Response from RuleBot"; // Temporary response
}
