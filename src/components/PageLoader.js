import React from 'react'
import '../index.css'
const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gradient-to-b from-blue-900 to-black">
      <div className="flex items-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-yellow-300 h-12 w-12 mr-4"></div>
        <p className="text-yellow-300 text-xl font-semibold">
          Load<span className="text-red-500">ing...</span>
        </p>
      </div>
    </div>
  )
}

export default PageLoader
