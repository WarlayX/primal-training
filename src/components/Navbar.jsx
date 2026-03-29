import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Hamburger from '../assets/images/Plus.png'
import Minus from '../assets/images/Minus.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>

      <nav className='bg-primary-light px-2.5 py-5 flex items-center justify-between border-b fixed w-full z-10'>

        <img src={Logo} alt="Primal Training Logo" className='h-6.25 w-45' />

        <div className='hidden md:flex items-center gap-14'>
          <ul className='flex gap-14 tracking-[-0.01em]'>
            <li className='hover:text-gray-500 transition-colors duration-300'>
              <Link to="/">HOME</Link>
            </li>
            <li className='hover:text-gray-500 transition-colors duration-300'>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
          <Link to="/reserve">
            <button className='bg-primary text-[14px] border rounded-md py-2 px-4 tracking-[-0.01em] cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 w-full'>
              RESERVE YOUR SPOT
            </button>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          <img
            src={isOpen ? Minus : Hamburger}
            alt={isOpen ? "Close Menu" : "Open Menu"}
            className='w-6 h-6 cursor-pointer'
          />
        </button>

      </nav>

      <div className={`fixed top-16 left-0 w-full bg-primary-light border-b z-10 px-2.5 py-6 flex flex-col gap-6 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <ul className='flex flex-col gap-6 tracking-[-0.01em]'>
          <li className='hover:text-gray-500 transition-colors duration-300'>
            <Link to="/">HOME</Link>
          </li>
          <li className='hover:text-gray-500 transition-colors duration-300'>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        
          <Link to="/reserve">
            <button className='bg-primary text-[14px] border rounded-md py-2 px-4 tracking-[-0.01em] cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 w-full'>
              RESERVE YOUR SPOT
            </button>
          </Link> 
        
      </div>

    </header>
  );
}