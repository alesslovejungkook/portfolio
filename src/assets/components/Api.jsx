import React, { useState } from 'react';
import './API.css';

function API() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const apis = {
    joke: async () => {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any');
      const data = await res.json();
      return data.type === 'single' ? data.joke : `${data.setup} ... ${data.delivery}`;
    },
    quote: async () => {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      return `"${data.content}" — ${data.author}`;
    },
    advice: async () => {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      return data.slip.advice;
    },
    trivia: async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
      const data = await res.json();
      const q = data.results[0].question;
      const a = data.results[0].correct_answer;
      return `Trivia: ${q} 🧠 Answer: ${a}`;
    },
    fact: async () => {
      const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await res.json();
      return `🤓 Fun fact: ${data.text}`;
    },
    number: async () => {
      const res = await fetch('http://numbersapi.com/random/trivia?json');
      const data = await res.json();
      return `🔢 Number fact: ${data.text}`;
    },
    weather: async (city) => {
      try {
        const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=3`);
        const text = await res.text();
        return `🌦️ ${text}`;
      } catch {
        return "I couldn't get the weather right now.";
      }
    },
    word: async (word) => {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        const meaning = data[0].meanings[0].definitions[0].definition;
        return `📘 Definition of "${word}": ${meaning}`;
      }
      return "I couldn’t find that word 😅";
    },
    wiki: async (query) => {
      try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        const data = await res.json();
        return data.extract || "Sorry, I couldn't find that on Wikipedia.";
      } catch {
        return "Oops! Something went wrong fetching info.";
      }
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const msg = input.toLowerCase();
    let reply = '';

    if (msg.includes('hello') || msg.includes('hi')) {
      reply = "Hey there! 👋 How’s your day going?";
    } else if (msg.includes('how are you')) {
      reply = "I'm feeling pink and positive! 🌸 How about you?";
    } else if (msg.includes('joke')) {
      reply = await apis.joke();
    } else if (msg.includes('quote')) {
      reply = await apis.quote();
    } else if (msg.includes('advice')) {
      reply = await apis.advice();
    } else if (msg.includes('fact')) {
      reply = await apis.fact();
    } else if (msg.includes('trivia')) {
      reply = await apis.trivia();
    } else if (msg.includes('number')) {
      reply = await apis.number();
    } else if (msg.includes('weather')) {
      const city = msg.split('weather in ')[1] || 'Manila';
      reply = await apis.weather(city);
    } else if (msg.startsWith('define ')) {
      const word = msg.replace('define ', '').trim();
      reply = await apis.word(word);
    } else {
      reply = await apis.wiki(input);
    }

    const botMsg = { sender: 'bot', text: reply };
    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="chat-widget">
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="api-container">
          <div className="chat-header" onClick={() => setIsOpen(false)}>
            Chat Assistant  <span style={{ cursor: 'pointer' }}>✕</span>
          </div>

          <div className="chat-window">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chat-message bot">Typing...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask me anything... (e.g. weather in Cebu, define love)"
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default API;
