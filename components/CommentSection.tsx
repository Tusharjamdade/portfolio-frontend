"use client"
import React from 'react'

export default function CommentSection() {
  return (
    <section className="bg-white dark:bg-black py-8 lg:py-16 antialiased">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comment/Suggestion</h2>
    </div>
    {/* <form className="mb-6"> */}
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button onClick={async()=>{
            const name = prompt("Enter Your Name")
            console.log(name)
        }}
            className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Post comment
        </button>
    {/* </form> */}
  </div>
  
</section>
  )
}
