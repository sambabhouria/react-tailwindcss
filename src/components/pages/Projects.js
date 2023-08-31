import React from 'react'
import Project1Img from '../assets/myanimeapp.jpg'
import Project2Img from '../assets/ozone.JPG'
import Project3Img from '../assets/real.JPG'
import Project4Img from '../assets/fashion.JPG'
import Project5Img from '../assets/phones.JPG'
import Project6Img from '../assets/king.JPG'
import Project7Img from '../assets/mario.JPG'
import Project8Img from '../assets/art.JPG'
import '../../index.css'
import { FiArrowRight } from 'react-icons/fi'

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-blue-900 to-black"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 my-10 text-center">
          My <span className="text-red-500">Projects</span>
        </h2>
        <p className="text-white mb-8 text-lg text-center">
          Here are some of my best projects, the rest of the projects are
          available on GitHub
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project1Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Anime App
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional Anime App like “Crunchyroll” using
                  Flutter.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project2Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Ozone3 Web App
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional web app for ozone3 studio using ReactJS
                  and Tailwind CSS.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project3Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Real Estate
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional web app about real estate using ReactJS
                  and Tailwind CSS.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project4Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Fashion App
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional mobile app about fashion and clothes
                  store using Flutter.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project5Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Phones Store
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a simple mobile app phones store/shop using Flutter.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project6Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Kingdom Academy
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional web app for an academy which offers
                  courses using NextJS.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project7Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Mario Game
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a professional mario game using C# and multimedia
                  techniques.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Project8Img}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  My Art Gallery
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  Created a simple art gallery mobile app to show my artworks
                  using Flutter.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    id
                    href="https://github.com/sambabhouria"
                  >
                    more info on GitHub{' '}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
