import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Home() {
  return (
    <>
      <div className="bg-gray-600 min-h-screen">
        <nav className='h-20 bg-gray-800 flex w-full fixed top-0 left-0 right-0 z-50'>
          <img src="/images/gym-logo.jpg" alt="gym" className='w-24 h-20'/>
          <div className="flex flex-col items-center mt-3 ml-auto mr-auto md:ml-[530px]">
            <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl">Flex Fitness Center</h1>
            <span className="text-white font-thin text-sm md:text-base lg:text-lg">Walk in STRONG, Walk out STRONGER</span>
          </div>
        </nav>

        <div className="relative pt-20">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img src="/images/home1.jpg" alt="Background 1" className="w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover" />
            </div>
            <div>
              <img src="/images/home2.jpg" alt="Background 2" className="w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover" />
            </div>
            <div>
              <img src="/images/home3.jpg" alt="Background 3" className="w-full h-[60vh] md:h-[80vh] lg:h-screen object-cover" />
            </div>
          </Carousel>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold">Welcome to Flex Fitness Center</h1>
            <p className="mt-4 text-lg md:text-xl">Achieve Your Fitness Goals with Us</p>
            <Link to="/LoginList">
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mt-2 text-sm md:text-base lg:text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-base md:text-lg">Feel free to reach out to us through any of the following platforms:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:someone@example.com" className="hover:text-gray-400 mb-2">
              <img src="/images/mail.png" alt="Email" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <img src="/images/facebook.jpg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home






