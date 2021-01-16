import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Stripes from "../components/Common/Stripes"
import NewsCard from "../components/NewsCard"
import Button from "../components/Common/Button"
import Nav from "../components/Layout/Nav"
import Seo from "../components/Layout/Seo"
import Footer from "../components/Layout/Footer"

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
            image {
              fluid {
                src
              }
            }
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
        image={e.node.image.fluid.src}
        index={i}
      />
    )
  })

  const pageCount = Math.ceil(cards.length / 6)
  const pages = []
  let counter = 0
  for (let i = 0; i < pageCount; i++) {
    pages.push(
      <div className="grid grid-cols-1 gap-2 md:gap-2 md:grid-cols-3 md:grid-rows-3">
        <div className="md:row-span-2 md:col-span-2">
          {cards[counter] ? cards[counter] : null}
        </div>
        <div>{cards[counter + 1] ? cards[counter + 1] : null}</div>
        <div>{cards[counter + 2] ? cards[counter + 2] : null}</div>
        <div>{cards[counter + 3] ? cards[counter + 3] : null}</div>
        <div>{cards[counter + 4] ? cards[counter + 4] : null}</div>
        <div>{cards[counter + 5] ? cards[counter + 5] : null}</div>
      </div>
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
        <Seo title="News" />
        <Nav />
        <h1 className="text-gray-500 font-extrabold p-10 3xl:text-6xl 3xl:p-16">
          NEWS
        </h1>
        <section className="w-4/5 h-full mx-36">
          {pages[page]}

          <div className="mt-8 mb-8 flex flex-col items-center md:flex-row md:mt-20 md:mb-16 3xl:text-2xl 3xl:mb-24 3xl:mt-32">
            {page > 0 ? (
              <div className="px-2 py-1">
                <Button text="Prev" action={prevPageHandler} />
              </div>
            ) : null}
            {page === pageCount - 1 ? null : (
              <div className="px-2 py-1">
                <Button text="Next" action={nextPageHandler} />
              </div>
            )}
            <span className="mt-4 md:mt-0 md:ml-4">{`Page ${
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
