import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import Footer from "../components/Footer"
import Button from "../components/Common/Button"
import Stripes from "../components/Common/Stripes"
import { days, months } from "../helpers/dateFunctions"

const newsArticle = ({ data }) => {
  // issues with contentful richtext provoked this reformatting
  // split on "
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
      newArray.push(`!!!${e}`)
    }
  })
  // character count per column
  const charsPerColumn =
    Math.ceil(newArray.join("").split(" ").join("").length / 2) + 40
  // build columns
  const col1 = []
  const col2 = []
  let charCount = 0
  const columnInput = newArray.join(" ").split(" ")
  // add individual words to columns based on character count
  columnInput.forEach(e => {
    charCount > charsPerColumn ? col2.push(e) : col1.push(e)
    charCount += e.length
  })

  // build jsx
  const col1Output = col1
    .join(" ")
    .split("!!!")
    .map(e => {
      if (e.length > 0) {
        return (
          <p key={Math.random() + e[0]} className="mb-4">
            {e}
          </p>
        )
      }
      return null
    })
  const col2Output = col2
    .join(" ")
    .split("!!!")
    .map(e => {
      if (e.length > 0) {
        return (
          <p key={Math.random() + e[0]} className="mb-4">
            {e}
          </p>
        )
      }
      return null
    })

  // build usable date
  const dateObj = new Date(data.contentfulArticle.date)

  const articleDate = {
    day: days[dateObj.getDay()],
    date: dateObj.getDate(),
    month: months[dateObj.getMonth()],
    year: dateObj.getFullYear(),
  }

  // get article number and next and previous articles
  const articles = data.allContentfulArticle.edges
  articles.sort((a, b) => {
    if (a.node.date > b.node.date) return -1
    if (a.node.date < b.node.date) return 1
    return 0
  })
  // article number
  const articleIndex = articles.findIndex(e => {
    return e.node.title === data.contentfulArticle.title
  })
  // prev article title slug

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
          <div className="flex flex-col justify-start w-30% px-8 mb-28 mr-8">
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
              src={
                data.contentfulArticle.image ||
                "https://scontent-lhr8-1.xx.fbcdn.net/v/t31.0-8/19787292_10155473581056563_9209247377612002874_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a9b1d2&_nc_ohc=2n5PWsNzLHQAX9JqIeW&_nc_ht=scontent-lhr8-1.xx&oh=16423e300aa4e849bbfbdeda841b516c&oe=600197EA"
              }
            ></img>
          </div>
        </div>
        <div className="w-70% m-auto mb-36 text-xl flex justify-around">
          <div className="w-45%">{col1Output}</div>
          <div className="w-45%">{col2Output}</div>
        </div>
        <div className="ml-56 my-10">
          {articleIndex > 0 ? (
            <>
              <Link to={`/${slugify(articles[articleIndex - 1].node.title)}/`}>
                <Button text="Prev"></Button>
              </Link>
              <span className="m-5em"></span>
            </>
          ) : null}
          {articleIndex < articles.length - 1 ? (
            <>
              <Link to={`/${slugify(articles[articleIndex + 1].node.title)}/`}>
                <Button text="Next" /> <span className="m-5em"></span>
              </Link>
            </>
          ) : null}
          <span className="mx-10em">{`Article ${articleIndex + 1} of ${
            articles.length
          }`}</span>
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
      image
    }
    allContentfulArticle {
      edges {
        node {
          date
          title
        }
      }
    }
  }
`
