import React from 'react'

export default function Projects() {
  return (
    <section className="min-h-screen dark:bg-black border-b cursor-pointer pt-10" id="projects">
      <div className=" text-black dark:bg-black dark:text-white mt-10 text-2xl font-extrabold text-center">Projects</div>
    <div className="flex justify-evenly items-center h-full flex-wrap">
      {/* <div> */}
    <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4">
      <img className="w-full" src="/portfolio.png" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">PortFolio Website</div>
        <p className="text-black text-base dark:text-white text-justify">
        I created a personal portfolio website using Next.js, leveraging its server-side rendering and static site generation for optimal performance and SEO. The site features dynamic content and efficient code splitting for a smooth user experience.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div>
    </div>


    {/* <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4">
      <img className="w-full" src="/image.png" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">PortFolio Website</div>
        <p className="text-black text-base dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div>
    </div> */}


    <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4">
      <img className="w-full" src="/bloging.png" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Bloging Website</div>
        <p className="text-black text-base dark:text-white text-justify">
        I built a blogging website with React.js that allows users to log in, sign up, post blogs, and read content from other users. The platform features dynamic interactions and user authentication for a seamless blogging experience.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
      </div>
    </div>



      </div>
    
    {/* </div> */}
  </section>
  )
}
