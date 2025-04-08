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
            <img className="w-full" src="/image.png" alt="Portfolio Website" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Portfolio Website</div>
              <p className="text-black text-base dark:text-white text-justify">
                I created a personal portfolio website using Next.js, leveraging its server-side rendering and static site generation for optimal performance and SEO.
                This portfolio website includes all my projects, education, and the skills that I know.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hono</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LLM</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/portfolio-frontend" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>

          </div>
        </Link>
        {/* Movie Booking */}
        <Link href={"https://github.com/Tusharjamdade/nasa"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/nasa.png" alt="NASA Explorer" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">NASA Explorer</div>
              <p className="text-black text-base dark:text-white text-justify">
                NASA Explorer is a web platform powered by NASA&apos;s API, allowing users to explore astronomy images, celestial events, and space data. It includes a Global Warming Visualizer and an asteroid threat prediction model using Scikit-learn.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Machine Learning</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#FastAPI</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/nasa" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>

        {/* Project Card: LedgerAI */}
        <Link href={"https://github.com/Tusharjamdade/ledgerai"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/Leadger.png" alt="LedgerAI" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">LedgerAI</div>
              <p className="text-black text-base dark:text-white text-justify">
                LedgerAI is an AI-powered OCR pipeline for structured PDF data extraction. It integrates Google Gemini 1.5 Flash for LLM-driven document interaction and financial data analysis, with a dynamic visualization dashboard using React.js and Recharts.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Machine Learning</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LLM</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/ledgerai" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>

        {/* Project Card: SmartCampuss */}
        <Link href={"https://github.com/Tusharjamdade/smartcampuss"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src="/smartcampus.png" alt="SmartCampuss" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">SmartCampuss</div>
              <p className="text-black text-base dark:text-white text-justify">
                SmartCampuss is a virtual canteen service that dynamically tracks seat bookings, payments, and orders. It also includes a xerox automation system and an AI-powered Q&A system using Gemini AI for user support.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PostgreSQL</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Prisma ORM</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#REST API</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/smartcampuss" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link>
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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web Socket</span>
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
        <Link href={"https://github.com/Tusharjamdade/VIIT-Attendify"}>
          <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4 hover:shadow-xl transition-shadow duration-300">
          <div className="w-70 h-48 overflow-hidden flex items-center justify-center rounded-md">
        <img
          src="/attendity1.jpg"
          alt="Attendify"
          className="h-full object-contain"
        />
      </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Attendity</div>
              <p className="text-black text-base dark:text-white text-justify">
              Attendify is a smart attendance system with role-based access, allowing faculty to add lectures and download attendance in Excel or PDF, while students mark attendance using location and fingerprint recognition.              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React Native</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Firebase</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RBAC</span>
            </div>
            <div className="px-6 pb-4">
              <a href="https://github.com/Tusharjamdade/VIIT-Attendify" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View on GitHub</a>
            </div>
          </div>
        </Link> 
        {/* Project Card: NASA Explorer */}


      </div>
    </section>
  )
}
