import React, { useState } from "react"
import { Link } from "gatsby"
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"
import { GiHamburgerMenu } from "react-icons/gi"
import { VscChromeClose } from "react-icons/vsc"

const Nav = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <button
        onClick={() => setMenu(prev => !prev)}
        className="fixed top-0 right-0 z-50 w-16 h-16 bg-blue-800 flex justify-center items-center text-4xl text-white focus:outline-none 3xl:h-24 3xl:w-24 3xl:text-6xl"
      >
        {menu ? <VscChromeClose /> : <GiHamburgerMenu />}
      </button>
      {menu ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-blue-800 opacity-95 z-40 flex justify-center items-center">
          <h1 className="absolute text-4xl font-bold top-0 left-0 p-4 text-white 3xl:text-6xl">
            <Link to="/">
              JPR <span className="font-light">#</span>118
            </Link>
          </h1>
          <div className="flex flex-col w-80% h-50% sm:flex-row items-center justify-center">
            <div className="p-4 flex items-center justify-center ">
              <ul className="text-2xl font-light text-white xl:text-3xl 3xl:text-5xl">
                <li className="p-2 py-3 xl:p-4 3xl:p-8">
                  <Link to="/about/">ABOUT</Link>
                </li>
                <li className="p-2 py-3 xl:p-4 3xl:p-8">
                  <Link to="/news/">NEWS</Link>
                </li>
                <li className="p-2 py-3 xl:p-4 3xl:p-8">
                  <Link to="/gallery/">GALLERY</Link>
                </li>
              </ul>
              <div className="h-48 w-2 ml-8 bg-white transform skew-y-25 sm:h-56 3xl:h-96"></div>
            </div>
            <div className="flex items-center justify-center text-5xl text-white mt-10 sm:flex-col sm:mt-0 sm:px-10">
              <a
                className="px-2 sm:py-3 3xl:text-7xl 3xl:p-5"
                href="https://www.facebook.com/JPR118"
                target="_blank"
                rel="noreferrer"
              >
                <SiFacebook />
              </a>
              <a
                className="px-2 sm:py-2 3xl:text-7xl 3xl:p-4"
                href="https://www.instagram.com/jp.118/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                className="text-6xl px-2 sm:text-5xl sm:py-2 3xl:text-7xl 3xl:py-3"
                href="https://www.youtube.com/channel/UCMJCzcXV4yvFeRZ4E6P25HQ"
                target="_blank"
                rel="noreferrer"
              >
                <SiYoutube />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Nav
