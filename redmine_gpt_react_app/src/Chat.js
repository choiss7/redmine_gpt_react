import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        },
      });

      setResponses([...responses, { question: input, answer: response.data.choices[0].text }]);
      setInput(''); // 입력 필드 초기화
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <h1>ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="질문을 입력하세요..."
        />
        <button type="submit">전송</button>
      </form>
      <div>
        {responses.map((res, index) => (
          <div key={index}>
            <strong>Q:</strong> {res.question}
            <br />
            <strong>A:</strong> {res.answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatGPT;
