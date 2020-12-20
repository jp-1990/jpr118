import React, { useEffect, useState } from "react"
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si"
import { Link } from "gatsby"

import SEO from "../components/Layout/Seo"
import Stripes from "../components/Common/Stripes"

const Home = () => {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    if (!windowWidth) setWindowWidth(window.innerWidth)
    const listener = window.addEventListener("resize", e => {
      setWindowWidth(prev =>
        e.target.innerWidth === prev ? prev : e.target.innerWidth
      )
    })
    return () => {
      window.removeEventListener("resize", listener)
    }
  }, [windowWidth])

  return (
    <div className="w-screen h-screen relative overflow-hidden flex-initial">
      <SEO title="Home" />
      {windowWidth >= 1024 ? (
        <iframe
          title="onboard video"
          src="https://www.youtube.com/embed/N2twYZOc4Q0?controls=0&autoplay=1&mute=1&loop=1&playlist=N2twYZOc4Q0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay="1"
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
      ) : null}
      <div className="h-full w-full absolute bg-blue-main -z-10 lg:opacity-40"></div>
      <Stripes
        position="absolute"
        opacity={windowWidth >= 1024 ? `30` : `40`}
        color={windowWidth >= 1024 ? "blue-main" : "blue-600"}
        uniform={windowWidth >= 1024 ? false : true}
      />
      <div
        className="absolute  top-20 bg-blue-main w-full h-44 sm:h-48 lg:h-48 lg:w-45% xl:h-56 2xl:w-40%"
        style={{ transform: "skew(-20deg)", right: "-5%" }}
      ></div>
      <div className="absolute top-20 right-0 text-white w-full lg:w-auto lg:pl-20 lg:w-45% xl:right-4 2xl:right-0 2xl:pl-36 2xl:40%">
        <h1 className="text-center text-6xl font-bold pt-4 sm:text-right sm:mr-10% sm:text-7xl lg:text-7xl xl:text-8xl">
          JPR <span className="font-light">#</span>118
        </h1>
        <div className="flex justify-center items-center pt-4 text-5xl sm:justify-between sm:pr-10% sm:w-auto sm:pl-60% lg:pr-0 lg:pl-0 lg:pt-2 lg:w-auto lg:ml-30% lg:mr-10% xl:mr-10% xl:pt-0 xl:text-7xl 2xl:pr-6 2xl:pl-2">
          <a
            className="px-2 sm:p-0"
            href="https://www.facebook.com/JPR118"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </a>
          <a
            className="px-2 sm:p-0"
            href="https://www.instagram.com/jp.118/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a>
          <a
            className="text-6xl px-2 sm:px-0 lg:text-7xl xl:text-8xl"
            href="https://www.youtube.com/channel/UCMJCzcXV4yvFeRZ4E6P25HQ"
            target="_blank"
            rel="noreferrer"
          >
            <SiYoutube />
          </a>
        </div>
      </div>
      <div className="absolute bottom-1/3 right-10% p-4 flex flex-row  md:right-5% lg:right-10%">
        <div className="h-46 w-3 mx-8 bg-white transform skew-y-25"></div>
        <ul className="text-2xl font-light text-white xl:text-3xl">
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
      <div className="absolute flex flex-col bottom-14 w-full items-center right-0 text-white sm:items-start sm:w-auto sm:right-5%">
        <h2 className="py-1 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          James Plummer
        </h2>
        <h2 className="py-1 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          MRO600 // BEMSEE
        </h2>
        {windowWidth >= 1024 ? (
          <h4 className="py-1 lg:text-xl xl:text-2xl">
            Onboard Brands Hatch - Indy Circuit{" "}
          </h4>
        ) : null}
      </div>
    </div>
  )
}

export default Home
