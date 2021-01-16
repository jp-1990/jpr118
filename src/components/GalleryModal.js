import React from "react"

import Stripes from "../components/Common/Stripes"
import { months, days } from "../helpers/dateFunctions"

const GalleryModal = ({ data, active, setActive }) => {
  const date = new Date(data[active].node.date)
  const dateObj = {
    day: days[date.getDay()].substring(0, 3),
    date: date.getDate(),
    month: months[date.getMonth()].substring(0, 3),
    year: date.getFullYear(),
  }
  return (
    <button
      onClick={() => setActive(false)}
      className="top-0 fixed z-50 w-screen h-screen"
    >
      <div className="bg-blue-800 w-full h-full opacity-95 flex justify-center items-center">
        <Stripes position="absolute" color="blue-700" opacity="90" />
      </div>
      <div className="absolute top-10% left-10% w-80% flex flex-col items-center xl:w-70% xl:left-15%">
        <div className="relative w-full z-10 top-0 left-0 flex flex-col justify-center lg:flex-row">
          <div className="w-full text-xs lg:w-15% 3xl:text-xl">
            <div className="bg-gray-200 text-gray-700 p-5em flex flex-row items-center lg:p-5em lg:flex-col">
              <h3 className="text-20em mx-1 capitalize">{dateObj.day}</h3>
              <h3 className="text-20em mx-1">
                <span className="font-bold mr-2">{dateObj.date}</span>
                {dateObj.month}
              </h3>
            </div>
            <div className="bg-blue-500 p-5em flex pl-4 justify-start lg:justify-center">
              <h3 className="text-20em text-white">{dateObj.year}</h3>
            </div>
          </div>
          <div className="w-full relative h-0 pb-65% overflow-hidden lg:w-3/4 lg:pb-50%">
            <img
              className="absolute w-full h-auto"
              src={data[active].node.image.fluid.src}
              alt="Lorum ipsum"
            ></img>
          </div>
        </div>
        <div className="w-full px-10% py-4 my-4 text-sm bg-gray-100 md:text-base lg:w-90% lg:text-xl 3xl:text-3xl">
          <p>{data[active].node.imageDescription.imageDescription}</p>
        </div>
      </div>
    </button>
  )
}

export default GalleryModal
