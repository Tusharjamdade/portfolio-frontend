import React from 'react'

export default function Projects() {
  return (
    <section className="min-h-screen dark:bg-black border-b cursor-pointer" id="projects">
    <div className="flex justify-center items-center h-full flex-wrap">
      <div>
      <div className=" text-black dark:bg-black dark:text-white mt-20 text-2xl font-extrabold text-center">Projects</div>
    <div className="border max-w-sm rounded-lg overflow-hidden shadow-lg text-black dark:bg-black dark:text-white mt-10 mx-2 mb-4">
      <img className="w-full" src="/portfolio-ss.png" alt="Sunset in the mountains"/>
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
    </div>
    
      </div>
    
    </div>
  </section>
  )
}
