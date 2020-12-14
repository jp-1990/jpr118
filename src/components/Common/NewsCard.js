import React from "react"

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
      className={`relative border border-gray-200 ${width} ${
        (index + 1) % 6 === 0 ? "mr-auto" : null
      } text-${fontSize} overflow-hidden`}
    >
      <div className="relative w-full pb-50% h-0">
        <img
          src="https://scontent-lhr8-1.xx.fbcdn.net/v/t31.0-8/13346323_10154231187381563_5093828550250292481_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=LU5_zuWol3oAX_cw83c&_nc_ht=scontent-lhr8-1.xx&oh=868fb7b0cc4f8ec28bfcfe1542fa84f0&oe=5FFE229F"
          alt="test"
        ></img>
      </div>
      <div className="absolute w-full z-10 top-0 left-0">
        <div className="mt-20em">
          <div className="bg-gray-200 text-gray-700 w-1/6 p-5em flex flex-col items-center">
            <h3 className="text-20em">{day}</h3>
            <h3 className="text-20em">
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
    </article>
  )
}

export default NewsCard
