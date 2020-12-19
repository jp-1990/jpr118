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
      className={`group transform relative w-full overflow-hidden focus:outline-none`}
    >
      <Link to={`/${slugify(title)}/`}>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-30 group-hover:opacity-0 transition-all duration-500"></div>
        <div
          className={`relative w-full pb-50% ${
            index % 6 === 0 ? "md:pb-51% xl:pb-50.5%" : "md:pb-50%"
          } h-0 `}
        >
          <img src={image} alt="test"></img>
        </div>
        <div className="w-full text-xs xl:text-base">
          <div
            className={`absolute top-0 z-20 left-0 mt-5% flex  ${
              index % 6 === 0 ? "lg:block lg:mt-20em" : "2xl:block"
            }`}
          >
            <div
              className={`bg-gray-200 text-gray-700 w-full p-1 flex flex-row items-center sm:flex-col ${
                index % 6 === 0
                  ? "lg:px-2 lg:py-1 3xl:px-4 3xl:py-2"
                  : "2xl:px-2 3xl:px-3"
              }`}
            >
              <h3
                className={`text-2xl capitalize hidden 2xl:block ${
                  index % 6 === 0 ? "3xl:text-3xl" : "2xl:text-sm 3xl:text-xl"
                }`}
              >
                {day}
              </h3>
              <h3
                className={`text-xs capitalize flex sm:text-base ${
                  index % 6 === 0
                    ? "lg:text-2xl lg:block 3xl:text-4xl"
                    : "3xl:text-2xl"
                }`}
              >
                <span
                  className={`font-bold pr-1 ${
                    index % 6 === 0 ? "lg:pr-0" : null
                  }`}
                >
                  {date}{" "}
                </span>
                {month}
              </h3>
            </div>
            <div
              className={`bg-blue-500 w-full p-1 flex justify-center ${
                index % 6 === 0 ? "lg:px-2 lg:py-1" : "2xl:py-0.5"
              }`}
            >
              <h3
                className={`text-xs text-white sm:text-base ${
                  index % 6 === 0 ? "lg:text-2xl 3xl:text-4xl" : "3xl:text-2xl"
                }`}
              >
                {year}
              </h3>
            </div>
          </div>
          <div
            className={`absolute z-20 bottom-2 sm:bottom-4 ${
              index % 6 === 0
                ? "lg:p-2 2xl:bottom-6 3xl:p-4 3xl:bottom-8"
                : "md:bottom-2 lg:p-1 2xl:bottom-3 3xl:p-2 3xl:bottom-4"
            } left-5% w-90% flex justify-center p-1  bg-gray-900 text-white font-extralight opacity-70`}
          >
            <h1
              className={`text-sm sm:text-xl ${
                index % 6 === 0
                  ? "lg:text-2xl xl:text-3xl 3xl:text-5xl"
                  : "md:text-xs lg:text-base 2xl:text-lg 3xl:text-3xl"
              } `}
            >
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default NewsCard
