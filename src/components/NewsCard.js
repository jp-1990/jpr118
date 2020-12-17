import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

const NewsCard = ({ day, date, month, year, title, image, index }) => {
  let width
  if (index === 0 || index % 6 === 0) {
    width = "w-2/3 mr-4 mb-8"
  } else if ((index + 5) % 6 === 0 || (index + 4) % 6 === 0) {
    width = "w-auto ml-4 mb-8"
  } else {
    width = "w-1/3 mr-8 "
  }
  const fontSize = index % 6 === 0 ? "base" : "1/2"

  return (
    <article
      className={`transform relative ${width} ${
        (index + 1) % 6 === 0 ? "mr-auto" : null
      } text-${fontSize} overflow-hidden px-1 py-2 shadow-lg focus:outline-none hover:scale-102 transition duration-500`}
    >
      <Link to={`/${slugify(title)}/`}>
        <div className="relative w-full pb-50% h-0">
          <img src={image} alt="test"></img>
        </div>
        <div className="absolute w-full z-10 top-0 left-0">
          <div className="mt-20em">
            <div className="bg-gray-200 text-gray-700 w-1/6 p-5em flex flex-col items-center">
              <h3 className="text-20em capitalize">{day}</h3>
              <h3 className="text-20em capitalize">
                <span className="font-bold">{date} </span>
                {month}
              </h3>
            </div>
            <div className="bg-blue-500 w-1/6 p-5em flex justify-center">
              <h3 className="text-20em text-white">{year}</h3>
            </div>
          </div>
          <div className="flex justify-center p-20em mx-30em mt-20% bg-gray-900 text-white font-extralight opacity-70">
            <h1 className="text-30em">{title}</h1>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default NewsCard
