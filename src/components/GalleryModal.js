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
      className="top-0 fixed z-50 w-screen h-screen "
    >
      <div className="bg-blue-800 w-full h-full opacity-95 flex justify-center items-center">
        <Stripes position="absolute" color="blue-700" opacity="90" />
      </div>
      <div className="absolute top-10% left-15% w-70% flex flex-col items-center">
        <div className="relative w-full z-10 top-0 left-0 flex justify-center">
          <div className="w-15%">
            <div className="bg-gray-200 text-gray-700 p-5em flex flex-col items-center">
              <h3 className="text-20em capitalize">{dateObj.day}</h3>
              <h3 className="text-20em capitalize">
                <span className="font-bold">{dateObj.date} </span>
                {dateObj.month}
              </h3>
            </div>
            <div className="bg-blue-500 p-5em flex justify-center">
              <h3 className="text-20em text-white">{dateObj.year}</h3>
            </div>
          </div>
          <div className="w-3/4 relative h-0 pb-50% overflow-hidden">
            <img className="absolute" src={data[active].node.image}></img>
          </div>
        </div>
        <div className="w-90% px-10% py-4 my-4 text-xl bg-gray-100">
          <p>{data[active].node.imageDescription.imageDescription}</p>
        </div>
      </div>
    </button>
  )
}

export default GalleryModal
