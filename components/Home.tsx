import Image from 'next/image';
import React from 'react';
import TypingEffect from '../components/TypingEffect'; // Adjust the path as needed
import Link from 'next/link';

export default function Home() {
  // Array of phrases to display
  const phrases = [
    'Next.js | React.js ',
    'Node.js | Express.js ',
    'Full-Stack Web Development',
    'MongoDB | PostgreSQL | Firebase',
    'Machine Learning',
    'Scikit-learn | TensorFlow'
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black dark:text-white border-b" id='home'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center mt-16 md:mt-0 border-spacing-2 border-black">
          {/* <Image width={500} height={500} className="h-52 w-52 rounded-full md:h-80 md:w-80 border border-spacing-2 border-black dark:border-white" src="/photo4.jpg" alt="Rounded avatar"/> */}
          <Image
  width={500}
  height={500}
  className="h-52 w-52 md:h-80 md:w-80 rounded-full border border-black dark:border-white object-cover object-center"
  src="/photo3.jpg"
  alt="Rounded avatar"
/>

        </div>
        <div className="flex justify-center items-center font-semibold">
          <div className="mt-6 mx-10 md:mt-0">
            <div className="text-xl mt-10">
              -- Hello --
            </div>
            <div className="text-2xl mt-4 font-bold">
            &nbsp;I&apos;m Tushar Jamdade 
            </div>
            <TypingEffect phrases={phrases} speed={50} />
            <div className="flex items-center justify-center text-black  dark:bg-black bg-white my-8">
              <div className="flex items-center justify-center gap-x-10 md:gap-x-16">
                  <Link href="https://x.com/tusharnjamdade" className="h-10 w-10 text-4xl text-black dark:text-white" aria-label="Find us on Twitter" target="_blank" rel="noopener">
                  {/* <svg className="h-10 w-10 text-black dark:text-white"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg> */}
                  <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link className="h-10 w-10 text-4xl text-black dark:text-white" href="https://github.com/Tusharjamdade" aria-label="Find us on Facebook" target="_blank"
                      rel="noopener">
                      <i className="fa-brands fa-github"></i>

                  </Link>
                  <Link href="https://www.linkedin.com/in/tusharjamdade" aria-label="Find us on LinkedIn"
                      target="_blank" rel="noopener">
                      <svg className="h-10 w-10 text-black dark:text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                              fill="currentColor"></path>
                      </svg>
                  </Link>
                  <Link href="https://www.instagram.com/tushar_jamdade_" aria-label="Find us on Instagram" target="_blank"
                      rel="noopener">
                      <svg className="h-10 w-10 text-black dark:text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                              fill="currentColor"></path>
                          <path
                              d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                              fill="currentColor"></path>
                      </svg>

                  </Link>
              </div>
          </div>
            <div className="text-2xl mt-1">
              <div className="my-1 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 dark:bg-black dark:text-white">
                  Intro
                </div>
              </div>
              <div className='mt-10 leading-8 text-xl md:mx-10 mb-4 text-justify'>
                Hi, I&apos;m Tushar Jamdade, a passionate computer engineering diploma holder with a drive for building innovative web solutions. Proficient in Next.js, React.js, Express.js, and Node.js, I craft seamless applications using both TypeScript and JavaScript. As I pursue my engineering degree, I’m eager to leverage my skills to create impactful and efficient digital experiences. Welcome to my portfolio!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
