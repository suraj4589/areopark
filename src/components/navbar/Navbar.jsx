import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.jpg";
import { navbarMenu } from "../../constants";


function Navbar() {
  
  const [openNavigation, setOpenNavigation] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNavigation(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% to-emerald-500 to-90% ... backdrop-blur-sm ${openNavigation ? "bg-gray-800" : ""
        }`}
    >
      <div ref={ref} className="max-w-full mx-auto px-4 sm:px-6 lg:px-3 flex   items-center justify-between h-16">
        {/* Logo */}
        <a className="Logo flex items-center" href="/">
          <img src={Logo} width={35} height={10} alt="Areopark Logo" className="mr rounded-xl" />
          <span className="text-white font-bold text-xl"><strong className="text-red-600 text-2xl">Areo</strong>park</span>
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          title="TogleButton"
          onClick={() => setOpenNavigation(!openNavigation)}
          className="text-white focus:outline-none lg:hidden"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {openNavigation ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-16 left-0 right-0 justify-center font-medium bg-teal-500  lg:bg-transparent lg:static lg:flex lg:items-center`}
        >
          <ul className="flex  flex-col  lg:flex-row lg:space-x-6 items-center lg:items-center">
            {navbarMenu.map((item) => (
              <li key={item.id} className="my-2  lg:my-0">
                <a
                  href={item.url}
                  className="text-white  hover:text-gray-800 px-4 py-2"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
