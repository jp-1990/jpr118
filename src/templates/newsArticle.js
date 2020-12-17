import React from "react"
import { graphql } from "gatsby"

import Footer from "../components/Footer"
import Button from "../components/Common/Button"
import Stripes from "../components/Common/Stripes"

const newsArticle = ({ data }) => {
  // issues with contentful richtext provoked this reformatting
  // split on "
  console.log(data.contentfulArticle.content.raw)
  const dataArray = data.contentfulArticle.content.raw.split('"')
  const newArray = []
  const badWords = [
    "nodeType",
    "text",
    "document",
    "data",
    "content",
    "paragraph",
    "value",
    "marks",
  ]
  // check if array element is content and not in the black list
  dataArray.forEach(e => {
    let wordMatch = false
    badWords.forEach(word => {
      if (e === word || !/^[a-zA-Z ]{5}/.test(e)) {
        wordMatch = true
        return
      }
    })
    if (!wordMatch) {
      newArray.push(<p>{e}</p>)
    }
  })

  // build usable date
  const dateObj = new Date(data.contentfulArticle.date)
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ]
  const articleDate = {
    day: days[dateObj.getDay()],
    date: dateObj.getDate(),
    month: months[dateObj.getMonth()],
    year: dateObj.getFullYear(),
  }

  return (
    <>
      <article className="relative overflow-hidden px-20 p-10">
        <Stripes
          position="absolute"
          color="gray-200"
          opacity="50"
          uniform={true}
        />
        <div className="flex justify-center pt-20 pb-16">
          <div className="flex flex-col justify-start w-30% px-8 mb-28">
            <div className="flex mt-3">
              <h3 className="bg-gray-200 text-gray-700 capitalize mb-10 py-1 px-3">
                {articleDate.day.substring(0, 3)} {articleDate.date}{" "}
                {articleDate.month.substring(0, 3)}
              </h3>

              <h3 className="bg-blue-500 py-1 px-3 text-white mb-10">
                {" "}
                {articleDate.year}
              </h3>
            </div>

            <h1 className="text-7xl font-bold text-gray-600">
              {data.contentfulArticle.title}
            </h1>
          </div>
          <div className="border w-50% h-0 pb-30% overflow-hidden shadow-md">
            <img
              alt="article"
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/40568649_2179329185613968_6087027032863014912_n.jpg?_nc_cat=108&ccb=2&_nc_sid=cdbe9c&_nc_ohc=euRAyuUI1aEAX9WAKZk&_nc_ht=scontent-lht6-1.xx&oh=54bab873487ea8b021ac98e07b09df2c&oe=5FFB6A16"
            ></img>
          </div>
        </div>
        <div className="w-50% m-auto  mb-36 text-xl">{newArray}</div>
        <div className="ml-56 my-10">
          <Button text="Prev" />
          <span className="m-5em"></span>
          <Button text="Next" />
          <span className="mx-10em">{`Article x of x`}</span>
        </div>
      </article>
      <Footer />
    </>
  )
}

export default newsArticle

export const query = graphql`
  query ArticalByTitle($title: String!) {
    contentfulArticle(title: { eq: $title }) {
      content {
        raw
      }
      date
      title
    }
  }
`
