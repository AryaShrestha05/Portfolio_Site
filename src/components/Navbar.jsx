import { navLinks } from '/constants/index.js';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <a href='#'>

            <h1 className='text-2xl text-white font-bold'>Arya Shrestha

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
    </>
  )
}

export default Navbar