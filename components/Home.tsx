
import Image from 'next/image'
import React, { useRef } from 'react'

export default function Home() {
  // Array of phrases to display
const phrases = [
  'portfolio',
  'web development showcase',
  'design projects',
  'creative endeavors',
  'professional work'
];

  return (
    <section className="min-h-screen bg-white dark:bg-black dark:text-white border-b" id='home'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center mt-16 md:mt-24">
                  <Image width={500} height={500} className="h-52 w-52 rounded-full md:h-80 md:w-80" src="/img.jpg" alt="Rounded avatar"/>
                </div>
                <div className="flex justify-center items-center font-semibold">
                    <div className="mt-6 mx-10 md:mt-0">
                      <div className="text-xl mt-10">
                        -- Hello --
                      </div>
                      <div className="text-2xl mt-3 font-bold">
                        I&apos;m Tushar Jamdade 
                      </div>
                      <div className="text-2xl mt-6 font-bold" id='change' >
                        Next.js | MERN Stack | DevOps
                      </div>
                      <div className="text-2xl mt-1 " id='change' >
                      <div className="my-1 border-b text-center">
                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 dark:bg-black dark:text-white">
                            Intro
                        </div>
                    </div>
                        <div className='mt-10 leading-8 text-xl mx-4 md:mx-10 mb-4 text-justify	'>
                        Hi, I&apos;m Tushar Jamdade, a passionate computer engineering diploma holder with a drive for building innovative web solutions. Proficient in Next.js, React.js, Express.js, and Node.js, I craft seamless applications using both TypeScript and JavaScript. As I pursue my engineering degree, I’m eager to leverage my skills to create impactful and efficient digital experiences. Welcome to my portfolio!
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
