import React from "react"
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si"
import { Link } from "gatsby"

import SEO from "../components/Seo"
import Stripes from "../components/Common/Stripes"

const Home = () => (
  <div className="w-screen h-screen relative overflow-hidden flex-initial">
    <SEO title="Home" />
    <iframe
      title="onboard video"
      src="https://www.youtube.com/embed/N2twYZOc4Q0?controls=0&autoplay=1&mute=1&loop=1&playlist=N2twYZOc4Q0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay="1"
      mute="1"
      className="absolute -z-20"
      style={{
        width: "115%",
        height: "115%",
        left: "-7.5%",
        top: "-7.5%",
        filter: "grayscale(100%)",
      }}
    ></iframe>
    <div className="h-full w-full absolute bg-blue-main opacity-40"></div>
    <Stripes position="absolute" opacity="30" color="blue-main" />
    <div
      className="absolute w-1/3 h-56 top-20 bg-blue-main"
      style={{ transform: "skew(-20deg)", right: "-5%" }}
    ></div>
    <div className="absolute top-20 right-0 text-white ">
      <h1 className=" text-8xl font-bold pt-4 px-14 ">
        JPR <span className="font-light">#</span>118
      </h1>
      <div className="flex text-7xl w-full justify-around items-center pl-48 pr-14">
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
          className="text-8xl"
          href="https://www.youtube.com/channel/UCMJCzcXV4yvFeRZ4E6P25HQ"
          target="_blank"
          rel="noreferrer"
        >
          <SiYoutube />
        </a>
      </div>
    </div>
    <div className="absolute bottom-1/3 right-64 p-4 mb-4 flex flex-row">
      <div className="h-52 w-3 mx-8 bg-white transform skew-y-25"></div>
      <ul className="text-4xl font-light text-white">
        <li className="p-3">
          <Link to="/about/">ABOUT</Link>
        </li>
        <li className="p-3">
          <Link to="/news/">NEWS</Link>
        </li>
        <li className="p-3">
          <Link to="/gallery/">GALLERY</Link>
        </li>
      </ul>
    </div>
    <div className="absolute bottom-14 right-20 text-white">
      <h1>James Plummer</h1>
      <h1>MRO600 // BEMSEE</h1>
      <h3>Onboard Brands Hatch - Indy Circuit </h3>
    </div>
  </div>
)

export default Home
