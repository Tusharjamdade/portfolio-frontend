"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CommentSection() {
  const [commentData, setCommentData] = useState("");
  const [modalMessage, setModalMessage] = useState("Response submitted successfully, Thank You!!");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async () => {
    if (!commentData.trim()) {
      setModalMessage("Please enter a valid comment.");
      openModal();
      return;
    }

    try {
      const name = prompt("Enter Your Name");
      if (!name) {
        setModalMessage("Name is required.");
        openModal();
        return;
      }

      const response = await axios.post("https://portfolio-backend.tusharnjamdade.workers.dev/comment", {
        name: name,
        comment: commentData
      });
      console.log(response);
      
      if (response) {
        setCommentData("");
        setModalMessage("Comment posted successfully!");
        openModal();
      }
    } catch (error) {
      console.error(error);
      setModalMessage("An error occurred. Please try again.");
      openModal();
    }
  };
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
    <section className="bg-white dark:bg-black py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comment/Suggestion</h2>
        </div>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
            id="comment"
            value={commentData}
            rows={6}
            onChange={(e) => setCommentData(e.target.value)}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..." 
            required
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post comment
        </button>
        {/* <button onClick={toggleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{isDropdownOpen ? "Hide Comments" : "Show Comments"} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
          
        </button> */}

        {isModalOpen && (
          <div
            tabIndex={-1}
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {modalMessage}
                </h3>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
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
                <p className="text-gray-500 dark:text-gray-400 ">{comment.comment}</p>
                <div className="flex items-center mt-4 space-x-4">
                  {/* Placeholder for Reply button */}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
    </section>
  );
}
