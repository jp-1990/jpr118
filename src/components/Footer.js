import React from "react"
import { Link } from "gatsby"
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"

import Stripes from "../components/Common/Stripes"

const Footer = () => {
  return (
    <div className="bg-blue-600 h-72 w-full relative">
      <div className=" h-72 z-10 relative overflow-hidden ml-30%">
        <Stripes
          position="absolute"
          color="blue-200"
          opacity="10"
          uniform={true}
        />
      </div>
      <div className="hidden absolute top-8 right-6 text-white z-20 md:block">
        <h1 className=" text-7xl font-bold pt-4 px-20 ">
          <Link to="/">
            JPR <span className="font-light">#</span>118
          </Link>
        </h1>
        <div className="flex text-6xl w-full justify-around items-center pl-36 pr-20">
          <a
            href="https://www.facebook.com/JPR118"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </a>
          <a
            href="https://www.instagram.com/jp.118/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            className="text-7xl"
            href="https://www.youtube.com/channel/UCMJCzcXV4yvFeRZ4E6P25HQ"
            target="_blank"
            rel="noreferrer"
          >
            <SiYoutube />
          </a>
        </div>
      </div>
      <div className="absolute top-10% left-15% p-4 flex flex-row">
        <ul className="text-2xl font-light text-white 3xl:text-3xl">
          <li className="p-2">
            <Link to="/about/">ABOUT</Link>
          </li>
          <li className="p-2">
            <Link to="/news/">NEWS</Link>
          </li>
          <li className="p-2">
            <Link to="/gallery/">GALLERY</Link>
          </li>
        </ul>
        <div className="h-54 w-2 mx-8 bg-white transform skew-y-25"></div>
      </div>
      <div className="absolute z-20 bottom-5 w-full bg-blue-800 p-1 text-center text-gray-100">
        &#169; 2020 J. Plummer. All rights reserved
      </div>
    </div>
  )
}

export default Footer
