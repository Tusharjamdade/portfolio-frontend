"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function CommentReplies() {
  const [comments, setComments] = useState([{name:"",comment:"",postTime:""}]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("https://portfolio-backend.tusharnjamdade.workers.dev/comments");
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <section className="bg-white dark:bg-black text-white py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
      {/* <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{isDropdownOpen ? "Hide Comments" : "Show Comments"} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
          
        </button> */}
        
        {isDropdownOpen && (
          <div className="mt-4">
            {/* Comment Component */}
            {comments.map((comment) => (
              <article key={comment.comment} className="p-6 mb-3 text-base bg-white border-b border-gray-200 dark:border-white dark:bg-black">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <div className="mr-2 relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">{comment.name[0]?.toUpperCase()}</span>
                      </div>
                      {comment.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime={comment.postTime} title={comment.postTime}>
                        {comment.postTime}
                      </time>
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
                <div className="flex items-center mt-4 space-x-4">
                  {/* Placeholder for Reply button */}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
