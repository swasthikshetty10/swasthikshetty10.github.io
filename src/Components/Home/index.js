
import Slide from 'react-reveal/Slide';
import swasthik from "../../Images/Pages/swasthik.jpg"

export default function Home({ secRef }) {
  return (
    <section className="lg:h-screen" ref={secRef}>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Slide left>
            <div className="lg:h-screen relative z-10 pb-8 pt-1 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

              <svg
                className="hidden lg:block absolute mr-0 right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >

                <polygon points="50,0 100,0 50,100 ,100" />

              </svg>



              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <h1 className="block xl:inline">Hello, I am Swasthik </h1>

                    <h1 className="block text-indigo-600 xl:inline">Full Stack Developer</h1>

                  </div>

                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Freelancer and CSE student learning and exploring the world of Computer Science
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/#/hireme"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Project Request
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </main>

            </div>
          </Slide>


        </div>
        <Slide right>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 md: lg:w-1/2 ">
            <img
              className="h-80 w-full object-cover sm:h-70 md:mb-4 lg:w-full lg:h-full"
              src={swasthik}
              alt="swasthik shetty"
            />
          </div>
        </Slide>
      </div>
    </section>
  )
}