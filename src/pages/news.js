import React, { useState } from "react"

import Stripes from "../components/Common/Stripes"
import NewsCard from "../components/Common/NewsCard"
import Button from "../components/Common/Button"

const News = () => {
  const [page, setPage] = useState(0)

  const cards = []
  for (let i = 0; i < 12; i++) {
    cards.push(
      <NewsCard
        key={i}
        day="Mon"
        date="24"
        month="Oct"
        year="2020"
        title="This is the headline for the article"
        index={i}
      />
    )
  }

  const pageCount = Math.ceil(cards.length / 6)
  const pages = []
  let counter = 0
  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <>
        <div className="w-full flex">
          {cards[counter] ? cards[counter] : null}
          <div className="flex flex-col w-1/3">
            {cards[counter + 1] ? cards[counter + 1] : null}
            {cards[counter + 2] ? cards[counter + 2] : null}
          </div>
        </div>
        <div className="flex w-full">
          {cards[counter + 3] ? cards[counter + 3] : null}
          {cards[counter + 4] ? cards[counter + 4] : null}
          {cards[counter + 5] ? cards[counter + 5] : null}
        </div>
      </>
    )
    counter += 6
  }

  const nextPageHandler = () => {
    setPage(prev => {
      return prev + 1 < pageCount ? prev + 1 : prev
    })
  }
  const prevPageHandler = () => {
    setPage(prev => {
      return prev - 1 >= 0 ? prev - 1 : prev
    })
  }

  return (
    <>
      <div className="w-full  relative overflow-hidden flex flex-col justify-center items-center">
        <Stripes position="absolute" color="gray-200" opacity="30" />
        <h1 className="text-gray-500 font-extrabold p-10">NEWS</h1>
        <section className="w-4/5 h-full border border-gray-100 mx-36">
          {pages[page]}

          <div className="mt-50em mb-30em">
            {page > 0 ? (
              <>
                <Button text="Previous" action={prevPageHandler} />
                <span className="m-5em"></span>
              </>
            ) : null}
            {page === pageCount - 1 ? null : (
              <Button text="Next" action={nextPageHandler} />
            )}
            <span className="mx-10em">{`Page ${
              page + 1
            } of ${pageCount}`}</span>
          </div>
        </section>
      </div>
      <div>footer</div>
    </>
  )
}

export default News
