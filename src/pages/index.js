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
        color={windowWidth >= 1024 ? "blue-main" : "blue-500"}
        uniform={windowWidth >= 1024 ? false : true}
      />
      {/* Main content box */}
      <div className="h-full relative">
        {/* Title box */}
        <div className="w-full flex justify-end">
          <div className="w-80 lg:w-96 xl:w-max">
            <div
              className="bg-blue-main w-full p-2 my-4 ml-10 opacity-70"
              style={{ transform: "skew(-20deg)" }}
            >
              <div
                className="flex flex-col items-end text-white ml-5 mr-10 pr-2 pb-2 2xl:pr-10"
                style={{ transform: "skew(20deg)" }}
              >
                <h1 className="font-extrabold lg:text-6xl lg:py-2 2xl:text-8xl">
                  JPR <span className="font-light">#</span>118
                </h1>
                <div className="flex items-center text-5xl 2xl:text-7xl">
                  <a
                    className=""
                    href="https://www.facebook.com/JPR118"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiFacebook />
                  </a>
                  <a
                    className="px-3"
                    href="https://www.instagram.com/jp.118/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiInstagram />
                  </a>
                  <a
                    className="text-5xl lg:text-6xl 2xl:text-8xl"
                    href="https://www.youtube.com/channel/UCMJCzcXV4yvFeRZ4E6P25HQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Nav box */}
        <div className="flex justify-end items-center mr-10 lg:absolute lg:top-50% lg:right-0 lg:transform lg:-translate-y-50% 2xl:mr-20">
          <div className="h-32 w-3 mx-8 bg-white transform skew-y-25 2xl:h-44"></div>
          <ul className="text-xl font-light text-white xl:text-3xl">
            <li className="p-2 2xl:p-3">
              <Link to="/about/">ABOUT</Link>
            </li>
            <li className="p-2 2xl:p-3">
              <Link to="/news/">NEWS</Link>
            </li>
            <li className="p-2 2xl:p-3">
              <Link to="/gallery/">GALLERY</Link>
            </li>
          </ul>
        </div>
        {/* Info box */}
        <div className="w-full flex justify-end md:absolute md:bottom-10% lg:right-5%">
          <div className="flex flex-col w-64 mt-40% text-white items-start lg:w-auto">
            <h2 className="py-1 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              James Plummer
            </h2>
            <h2 className="py-1 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              MRO600 // BEMSEE
            </h2>

            {windowWidth >= 1024 ? (
              <h4 className="py-1 lg:text-lg xl:text-xl">
                Onboard Brands Hatch - Indy Circuit{" "}
              </h4>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
