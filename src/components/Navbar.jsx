import { useRef } from 'react';
import { navLinks } from '/constants/index.js';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(navRef.current, { y: -5, duration: 0.3, ease: 'power1.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(navRef.current, { y: 0, duration: 0.3, ease: 'power1.out' });
  };

  return (
    <nav>
      <div
        ref={navRef}
        className='bg-gray-950 rounded-xl my-7 shadow-xs shadow-gray-600 hover:shadow-lg shadow-gray-600 transition-shadow duration-300 p-4 backdrop-blur-2xl'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href='#home'>
          <h1 className='text-2xl text-gray-400 hover:text-amber-50 duration-300 font-bold'>
            Arya Shrestha
          </h1>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className='text-white hover:text-gray-300'>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;