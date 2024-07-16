import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="absolute z-10 w-full py-8 padding-x">
        <nav className="flex items-center justify-between max-container">
          <a href="/">
            <img
              src={headerLogo}
              alt="Logo"
              width={130}
              height={29}
            />
          </a>

          <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-lg leading-normal font-montserrat text-slate-gray"
                  href={`${link.href}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hidden max-lg:block"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
            <img
              src={hamburger}
              alt="Hamburger"
              height={25}
              width={25}
            />
          </button>
        </nav>
      </header>
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="p-4">
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <a href="/">
              <img
                src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
              />
            </a>
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <nav>
            <ul>
              <li className="mt-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#about-us"
                  className="text-gray-700 hover:text-blue-600"
                >
                  About Us
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#products"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Products
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#contact-us"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
