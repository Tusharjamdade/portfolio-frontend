import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <section className="h-screen bg-white dark:bg-black dark:text-white border-b" >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center mt-4 md:mt-24">
                  <Image width={500} height={500} className="h-52 w-52 rounded-full md:h-80 md:w-80" src="/img.jpg" alt="Rounded avatar"/>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mt-6 md:mt-0">
                      <div className="text-xl">
                        ---Hello
                      </div>
                      <div className="text-2xl">
                        I&apos;m Tushar Jamdade 
                      </div>
                      <div className="text-2xl">
                        Next.js | MERN Stack | DevOps
                      </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
