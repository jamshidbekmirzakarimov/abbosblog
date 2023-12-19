import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='py-[20px] absolute w-full bg-[#7969693f] backdrop-blur-sm'>
        <div className="container">
          <div className='flex justify-between items-center'>
          <h1 className='text-white text-[40px] font-normal'>🚀</h1>
            <nav>
              <ul className='flex items-center gap-[25px]'>
                <li>
                  <Link className='text-white font-normal text-[20px]'>Home</Link>
                </li>
                <li>
                  <Link className='text-white font-normal text-[20px]'>About</Link>
                </li>
                <li>
                  <Link className='text-white font-normal text-[20px]'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
    </>
  )
}

export default Header
