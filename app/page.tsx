"use client";
import CommentSection from "@/components/CommentSection";
import Education from "@/components/Education";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hi, how can I help you today?', sender: 'AI' },
  ]);

  const handleToggle = () => setIsOpen(!isOpen);
 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      // Add user's message
      setMessages([...messages, { text: inputValue, sender: 'You' }]);
      setInputValue('');

      try {
        // Send the message to the API
        const response = await axios.post("https://portfolio-backend.tusharnjamdade.workers.dev/api", {
          search: inputValue
        });
        console.log(response)
        // Add API response to messages
        setMessages([...messages, { text: inputValue, sender: 'You' }, { text: response.data.text, sender: 'AI' }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <section>
      {/* Your other components */}
      <Home/>
      <Projects/>
      <Education/>
      <Skills/>
      <CommentSection/>
      
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-white m-0 cursor-pointer border-black dark:border-white bg-none p-0 normal-case leading-5 hover:text-gray-900 dark:bg-black dark:text-white"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="text-black block dark:text-white border-black align-middle">
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{ boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
          className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-8 bg-white p-6 rounded-lg border border-[#e5e7eb] h-4/5 w-5/6 md:w-96 dark:bg-black text-white"
        >
          <div className="text-center dark:text-white text-black">
            Chat with <span className="text-sky-300">Tushar.AI</span>
          </div>

          <div className="pr-4 h-5/6 overflow-y-auto dark:text-white text-black">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 my-4 text-sm ${msg.sender === 'You' ? 'text-right' : ''}`}>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    {msg.sender === 'You' ? (
                      <svg stroke="none" fill="black" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    ) : (
                      <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    )}
                  </div>
                </span>
                <p className="leading-relaxed">
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center absolute bottom-4 w-5/6">
            <input
              className="h-10 w-full rounded-md border border-[#e5e7eb] px-3 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
