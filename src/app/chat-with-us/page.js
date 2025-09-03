"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { role: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { role: "bot", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">🤖 Free AI Chat</h1>
        <div className="flex-1 overflow-y-auto mb-4 space-y-2 max-h-96">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white self-end ml-auto max-w-[75%]"
                  : "bg-gray-200 text-gray-800 self-start mr-auto max-w-[75%]"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-sm text-gray-500 animate-pulse">Typing...</div>
          )}
        </div>
        <div className="flex">
          <input
            className="flex-1 border rounded-l-xl px-3 py-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-xl hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
