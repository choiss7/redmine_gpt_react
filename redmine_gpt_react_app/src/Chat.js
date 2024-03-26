import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { author: 'User', text: userInput };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        prompt: userInput,
        model: "gpt-3.5-turbo",
        // Add other necessary API parameters here
      }, {
        headers: {
          'Authorization': `Bearer #{API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const gptResponse = { author: 'GPT', text: response.data.choices[0].text.trim() };
      setMessages([...messages, userMessage, gptResponse]);
    } catch (error) {
      console.error('Error calling GPT API:', error);
      setMessages([...messages, userMessage, { author: 'GPT', text: 'Error fetching response2' }]);
    }

    setUserInput('');
  };

  return (
    <div>
      <h1>Chat with GPT</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.author === 'GPT' ? 'left' : 'right' }}>
            <p><strong>{message.author}:</strong> {message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;

