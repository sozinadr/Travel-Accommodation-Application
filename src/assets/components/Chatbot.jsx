// Chatbot.js
import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      const newMessage = event.target.value.trim();
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      getBotResponse(newMessage);
      event.target.value = "";
    }
  };

  const getBotResponse = (message) => {
    const botMessage = {
      text: `I received your message: "${message}". I'm a simple bot and still learning. For more information, please contact our support.`,
      sender: "bot",
    };
    setMessages([...messages, { text: message, sender: "user" }, botMessage]);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {" "}
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <div className="mb-4">
            <h2 className="text-lg font-bold"> Chat with us </h2>{" "}
          </div>{" "}
          <div className="mb-4 h-48 overflow-y-auto border p-4 rounded-md">
            {" "}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${
                  message.sender === "bot" ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {" "}
                {message.text}{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Type a message..."
            onKeyDown={handleSendMessage}
          />{" "}
          <button
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Close{" "}
          </button>{" "}
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Chat{" "}
        </button>
      )}{" "}
    </div>
  );
};

export default Chatbot;
