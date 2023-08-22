import { useState } from 'react' 
import { Link } from 'react-router-dom'
// code above is link component from react-router-dom
import { styles } from '../styles';
import { navLinks } from '../constants';
import { fabian, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(''); // set active to empty string
  const [toggle, setToggle] = useState(false); // set toggle to false
  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-[8px] fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between
      items-center max-w-7xl mx-auto'>
      { /* Link is for routing */ }
        <Link
          to="/" // to is for destination
          className='flex items-center gap-2'
          onClick={() => { // when clicked
            setActive(""); // set active to empty string
            window.scrollTo(0, 0); // scroll to top when clicked
          }}
        >
          <img src={fabian} alt="fabian" className='w-12 h-12' />
          <p className='text-white text-[18px] 
          font-bold cursor-pointer flex'>
            Avan &nbsp;
            <span className='md:block hidden'>| Fabian
            </span>
          </p>
        </Link>
        { /* sm:flex is too show the menu when screen size is 640px and above */ }
        <ul className='list-none hidden sm:flex
        flex-row gap-10'> 
          {navLinks.map((link) => (
            <li
              key={link.id} // key is for unique identifier
              className={`${
                // active state value is getting from useState
                active === link.title // if active is equal to link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(link.title)} // set active to link.title
              >
              <a href={`#${link.id}`}> {link.title} </a> 
            </li>
          ))}
        </ul>
        { /* div below is for mobile screen */ }
        <div className='sm:hidden flex flex-1
        justify-end items-center'>
          <img
            src={toggle ? close : menu} // if toggle is true, show close icon, else show menu icon
            alt="menu"
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            {/* if toggle is true, show menu, else show nothing */}
            <div className={`${!toggle ? "hidden"
              : "flex" } p-6 black-gradient absolute 
              top-20 right-0 mx-4 my-2 min-w-[140px] 
              z-10 rounded-xl`}>
              <ul className='list-none flex justify-end
              items-start flex-col gap-4'> 
                {navLinks.map((link) => (
                  <li
                    key={link.id} // key is for unique identifier
                    className={`${
                      // active state value is getting from useState
                      active === link.title // if active is equal to link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium text-[16px] cursor-pointer`}
                    onClick={() => { 
                      setToggle(!toggle); // set toggle to opposite value
                      setActive(link.title)} // set active to link.title
                    }
                    >
                    <a href={`#${link.id}`}> {link.title} </a> 
                  </li>
                ))}
              </ul>
            </div>
        </div>
        { /* div above is for mobile screen */ }
      </div>
    </nav>
  )
}

export default Navbar