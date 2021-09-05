import Link from 'next/link'

import Logo from "./Logo"

const Nav = ({page}) => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-4 lg:px-0 lg:py-7 text-mainColor ">
      <Logo />
      {page === "home" && <div>
        <a target="_blank" className="mr-4 lg:mr-6 font-light hover:text-mainColor text-black" href="mailto:abouhilal.badr@gmail.com">
          Hire me
        </a>
        <Link href="/contact">
          <a className="border-2 border-mainColor py-2 px-6 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide">
            Say Hello
          </a>
        </Link>
      </div>}

      {page === "form" && <div className="flex items-center">
        <Link href="/">
          <a className="text-mainColor">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24">
              <path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
            </svg>
          </a>
        </Link>
      </div>}
    </nav>
  )
}
export default Nav