import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
        <section className="h-screen bg-white dark:bg-black dark:text-white border-b">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center items-center mt-4 md:mt-24">
                  <img className="h-52 w-52 rounded-full md:h-80 md:w-80" src="/img.jpg" alt="Rounded avatar"/>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mt-6 md:mt-0">
                      <div className="text-xl">
                        ---Hello
                      </div>
                      <div className="text-2xl">
                        i'm Tushar Jamdade
                      </div>
                      <div className="text-2xl">
                        Next.js | MERN Stack | DevOps
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="min-h-screen dark:bg-black" id="projects">
          <div className="flex justify-center items-center h-full flex-wrap">
            <div>
            <div className=" text-black dark:bg-black dark:text-white mt-20 text-lg font-extrabold text-center">Projects</div>
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
        <section className="h-screen bg-blue-400">

        </section>
        <section className="h-screen bg-yellow-400">

        </section>
    </section>
   
  );
}











 {/* <div className="absolute mr-6 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
<div className="relative ml-3">
  <div>
    <button
      type="button"
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      id="user-menu-button"
      aria-expanded={profileMenuOpen}
      aria-haspopup="true"
      onClick={toggleProfileMenu}
    >
      <span className="sr-only">Open user menu</span>
      <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User"
      />
    </button>
  </div>
  <div
    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${profileMenuOpen ? 'block' : 'hidden'}`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabIndex={-1}
  >
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-0"
    >
      Your Profile
    </a>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-1"
    >
      Settings
    </a>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-2"
    >
      Sign out
    </a>
  </div>
</div>
</div>
 */}



