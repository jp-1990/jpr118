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
    Math.ceil(newArray.join("").split(" ").join("").length / 2) + 80
  // build columns
  const col1 = []
  const col2 = []
  let charCount = 0
  let col = 1
  const columnInput = newArray.join(" ").split(" ")
  // add individual words to columns based on character count
  columnInput.forEach(e => {
    col === 2 ? col2.push(e) : col1.push(e)

    if (charCount > charsPerColumn && e[e.length - 1] === ".") col = 2
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
          <p key={Math.random() + e[0]} className=" mb-4">
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
      <article className="relative overflow-hidden 2xl:px-20 2xl:p-10">
        <Stripes
          position="absolute"
          color="gray-200"
          opacity="50"
          uniform={true}
        />
        <div className="flex justify-center flex-col-reverse 2xl:flex-row 2xl:pt-20 2xl:pb-16 2xl:mb-4">
          <div className="flex flex-col w-full px-2 2xl:px-8 2xl:justify-start 2xl:mr-8 2xl:w-35% 2xl:mt-12">
            <div className="flex my-2 md:ml-16 md:mt-3 md:mb-3 lg:ml-32 xl:ml-48 2xl:my-0 2xl:ml-0">
              <h3 className="bg-gray-200 text-gray-700 capitalize text-sm py-1 px-3 md:text-base 2xl:mb-10 2xl:px-3 2xl:text-2xl 3xl:text-4xl">
                {articleDate.day.substring(0, 3)} {articleDate.date}{" "}
                {articleDate.month.substring(0, 3)}
              </h3>

              <h3 className="bg-blue-500 py-1 px-3 text-white text-sm md:text-base 2xl:text-2xl 2xl:mb-10 3xl:text-4xl">
                {" "}
                {articleDate.year}
              </h3>
            </div>

            <h1 className="text-3xl font-bold text-gray-600 m-auto pb-6 pt-2 px-1 sm:text-4xl sm:px-16 lg:text-5xl lg:px-32 xl:px-48 2xl:px-0 pr-10 2xl:m-0 2xl:text-7xl 3xl:text-8xl">
              {data.contentfulArticle.title}
            </h1>
          </div>
          <div className="border w-full h-0 pb-60% overflow-hidden shadow-md 2xl:ml-4 2xl:w-50% 2xl:pb-30%">
            <img
              alt="article"
              src={
                data.contentfulArticle.image ||
                "https://scontent-lhr8-1.xx.fbcdn.net/v/t31.0-8/19787292_10155473581056563_9209247377612002874_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a9b1d2&_nc_ohc=2n5PWsNzLHQAX9JqIeW&_nc_ht=scontent-lhr8-1.xx&oh=16423e300aa4e849bbfbdeda841b516c&oe=600197EA"
              }
            ></img>
          </div>
        </div>
        <div className="w-70% m-auto mb-10 text-sm flex flex-col justify-around md:text-base xl:flex-row 2xl:mb-36 2xl:text-lg 3xl:text-3xl">
          <div className="xl:px-4 2xl:w-45%">{col1Output}</div>
          <div className="xl:px-4 2xl:w-45%">{col2Output}</div>
        </div>
        <div className="ml-4 my-6 flex flex-col items-center md:ml-16 md:flex-row lg:ml-32 xl:ml-48 2xl:ml-56 2xl:my-10 3xl:text-2xl">
          {articleIndex > 0 ? (
            <div className="px-2 py-1">
              <Link to={`/${slugify(articles[articleIndex - 1].node.title)}/`}>
                <Button text="Prev"></Button>
              </Link>
            </div>
          ) : null}
          {articleIndex < articles.length - 1 ? (
            <div className="px-2 py-1">
              <Link to={`/${slugify(articles[articleIndex + 1].node.title)}/`}>
                <Button text="Next" />
              </Link>
            </div>
          ) : null}
          <span className="mx-10em mt-2 2xl:mt-0">{`Article ${
            articleIndex + 1
          } of ${articles.length}`}</span>
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
