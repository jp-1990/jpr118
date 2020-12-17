import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Stripes from "../components/Common/Stripes"
import NewsCard from "../components/NewsCard"
import Button from "../components/Common/Button"
import Footer from "../components/Footer"

import { days, months } from "../helpers/dateFunctions"

const News = () => {
  const [page, setPage] = useState(0)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulArticle {
        edges {
          node {
            date
            title
            image
          }
        }
      }
    }
  `)

  // sort atricles by date, newest first
  const articles = data.allContentfulArticle.edges
  articles.sort((a, b) => {
    if (a.node.date > b.node.date) return -1
    if (a.node.date < b.node.date) return 1
    return 0
  })
  // add article data into newscards to display
  const cards = []
  articles.forEach((e, i) => {
    const date = new Date(e.node.date)
    cards.push(
      <NewsCard
        key={i}
        day={days[date.getDay()].substring(0, 3)}
        date={date.getDate()}
        month={months[date.getMonth()].substring(0, 3)}
        year={date.getFullYear()}
        title={e.node.title}
        image={e.node.image}
        index={i}
      />
    )
  })

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
        <section className="w-4/5 h-full mx-36">
          {pages[page]}

          <div className="mt-50em mb-30em">
            {page > 0 ? (
              <>
                <Button text="Prev" action={prevPageHandler} />
                <span className="m-5em"></span>
              </>
            ) : null}
            {page === pageCount - 1 ? null : (
              <>
                <Button text="Next" action={nextPageHandler} />
                <span className="m-5em"></span>
              </>
            )}
            <span className="mx-10em">{`Page ${
              page + 1
            } of ${pageCount}`}</span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default News
