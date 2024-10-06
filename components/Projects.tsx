import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <section className="min-h-screen dark:bg-black border-b cursor-pointer pt-10" id="projects">
      <div className="text-black dark:bg-black dark:text-white mt-10 text-2xl font-extrabold text-center">Projects</div>
      <div className="flex justify-evenly items-center h-full flex-wrap">

        {/* Project Card: Portfolio Website */}
        <Link href={"https://github.com/Tusharjamdade/portfolio-frontend"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/portfolio.png" alt="Portfolio Website" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Portfolio Website</div>
              <p className="text-black text-base dark:text-white text-justify">
                I created a personal portfolio website using Next.js, leveraging its server-side rendering and static site generation for optimal performance and SEO.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hono</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/portfolio-frontend" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
             
          </div>
        </Link>
          {/* Movie Booking */}
        <Link href={"https://github.com/Tusharjamdade/popcornseats.git"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/movie.png" alt="Blogging Website" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Popcorn Seats</div>
              <p className="text-black text-base dark:text-white text-justify">
              PopcornSeats is a user-friendly platform designed for booking movie shows effortlessly. It integrates Razorpay for secure and seamless payment processing, ensuring a smooth transaction experience for users. 
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RazorPay</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/popcornseats.git" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>
        {/* Project Card: TaskBidder */}
        <Link href={"https://github.com/Tusharjamdade/TaskBidder"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/Task.png" alt="TaskBidder" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">TaskBidder</div>
              <p className="text-black text-base dark:text-white text-justify">
                TaskBidder is an online freelancing platform that connects clients with skilled freelancers for various tasks and projects. Users can post job listings, bid on projects, and collaborate seamlessly.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/TaskBidder" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>

        {/* Project Card: Blogging Website */}
        <Link href={"https://github.com/Tusharjamdade/Medium.git"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/bloging.png" alt="Blogging Website" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Blogging Website</div>
              <p className="text-black text-base dark:text-white text-justify">
                I built a blogging website with React.js that allows users to log in, sign up, post blogs, and read content from other users. The platform features dynamic interactions and user authentication for a seamless experience. 
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hono</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/Medium.git" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>
        

        {/* Project Card: Recommendo.ai */}
        <Link href={"https://github.com/Tusharjamdade/recommendo.ai"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/comming.png" alt="Recommendo.ai" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Recommendo.ai</div>
              <p className="text-black text-base dark:text-white text-justify">
                Recommendo.ai is a platform that recommends products, movies, and games based on user-inputted text and past interactions.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Machine Learning</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/recommendo.ai" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}
