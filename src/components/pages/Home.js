import React, { useState } from 'react'
import me from '../assets/wifi.gif'
import mee from '../assets/campan2.gif'
import './home.css'
import { FaLinkedin } from 'react-icons/fa'

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const colorScheme = isDarkMode
    ? {
        backgroundColor: '#111827',
        textColor: '#ffffff',
        accentColor: '#fbbf24',
      }
    : {
        backgroundColor: '#ffffff',
        textColor: '#111827',
        accentColor: '#6366f1',
      }

  return (
    <div
      name="home"
      className={`flex justify-center items-center w-full min-h-screen ${
        isDarkMode
          ? 'bg-gradient-to-b from-blue-900 to-black'
          : 'bg-gradient-to-b from-blue-600 to-white'
      }`}
      style={{ backgroundColor: colorScheme.backgroundColor }}
    >
      <div
        className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center"
        style={{ color: colorScheme.textColor }}
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2.5">
            <br />
            <br />
            <h1
              className={`text-3xl sm:text-6xl font-bold text-${
                colorScheme.accentColor
              } ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Hello everyone!
              <br />
            </h1>
            <p
              className={`py-2 max-w-[1200px] text-2xl ${
                isDarkMode ? 'text-red-500' : 'text-violet-800'
              }`}
            >
              My name is DIALLO SAMBA,{' '}
              <span className={isDarkMode ? 'text-yellow-300' : 'text-red-500'}>
                I'm a Software Engineer.
              </span>
            </p>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                className={`text-black group border-2 px-6 py-3 my-2 mr-4 flex items-center rounded-full hover:bg-gradient-to-r hover:border-gradient-to-r transition-colors duration-500 transform-gpu hover:scale-105 ${
                  isDarkMode
                    ? 'border-white text-yellow-300'
                    : 'border-black text-black'
                }`}
              >
                <a target="_blank" rel="noreferrer" id href="/cvsamba.pdf">
                  Check My CV
                </a>
              </button>

              <button
                className={`text-black border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-gradient-to-r hover:border-gradient-to-r transition-colors duration-500 transform-gpu hover:scale-105 ${
                  isDarkMode
                    ? 'border-white text-yellow-300'
                    : 'border-black text-black'
                }`}
              >
                <a
                  id
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mamadou-samba-diallo/"
                >
                  LinkedIn
                  <FaLinkedin className="inline-block ml-2" />
                </a>
              </button>
            </div>
            <div className="flex items-right justify-right mt-4">
              <span
                className={`${isDarkMode ? 'text-white' : 'text-black'} mr-2`}
              >
                Light🌞
              </span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="toggle-slider"></span>
              </label>
              <span
                className={`${isDarkMode ? 'text-white' : 'text-black'} ml-2`}
              >
                Dark🌙
              </span>
            </div>
          </div>
          <br />
          <div className="md:w-1/3 flex justify-center md:justify-center">
            <img
              src={isDarkMode ? mee : me}
              alt="profile"
              className="rounded-full h-80 w-81 md:w-auto md:h-auto mr-8 mb-4 md:mb-0"
              style={{ marginLeft: '30px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
