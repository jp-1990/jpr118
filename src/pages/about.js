import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { IoMdTrophy } from "react-icons/io"

import Seo from "../components/Seo"
import AboutCard from "../components/AboutCard"
import Footer from "../components/Footer"
import Stripes from "../components/Common/Stripes"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutContent {
        edges {
          node {
            content {
              content
            }
            title
            title2
            image {
              fluid {
                src
              }
            }
          }
        }
      }
      allContentfulAboutCard {
        edges {
          node {
            podiums
            wins
          }
        }
      }
    }
  `)
  const about = data.allContentfulAboutContent.edges[0].node
  const trophys = data.allContentfulAboutCard.edges[0].node
  return (
    <>
      <Seo title="About" />
      <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
        <Stripes position="absolute" color="gray-200" opacity="30" />
        <div className="flex flex-col-reverse justify-center xl:py-20 xl:flex-row">
          <div className="flex flex-col justify-center items-center mt-16">
            <div className="flex mb-2 mr-4">
              <div className="relative text-6xl py-4 text-blue-900">
                <span className="absolute top-50% left-50% text-white text-2xl transform -translate-x-50% -translate-y-70%">
                  1
                </span>
                <IoMdTrophy />
              </div>
              <div className="flex flex-col pl-4">
                <h3 className="text-gray-800">WINS</h3>
                <span className="text-3xl text-gray-700">{trophys.wins}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-6xl py-4 text-blue-900">
                <IoMdTrophy />
              </div>
              <div className="flex flex-col pl-4">
                <h3 className="text-gray-800">PODIUMS</h3>
                <span className="text-3xl text-gray-700">
                  {trophys.podiums}
                </span>
              </div>
            </div>
            <img
              className="w-72 h-auto mt-10 mb-10"
              src={about.image.fluid.src}
            ></img>
          </div>
          <article className="w-full px-32 mt-5 xl:w-45%">
            <h1 className="font-extrabold px-2 text-gray-800">
              {about.title.toUpperCase()}
            </h1>
            <h2 className="bg-blue-700 w-64 px-2 mb-6 text-gray-100">
              {about.title2.toUpperCase()}
            </h2>
            <p className="mb-4 3xl:text-2xl">
              {about.content.content.split("!!p!!")[0]}
            </p>
            <p className="3xl:text-2xl">
              {about.content.content.split("!!p!!")[1]}
            </p>
          </article>
          <AboutCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
