import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { IoMdTrophy } from "react-icons/io"

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
  console.log(about)
  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
        <Stripes position="absolute" color="gray-200" opacity="30" />
        <div className="flex justify-center py-20">
          <div className="flex flex-col justify-center mt-16">
            <div className="flex mb-2">
              <div className="relative text-6xl p-4 text-blue-900">
                <span className="absolute top-50% left-50% text-white text-2xl transform -translate-x-50% -translate-y-70%">
                  1
                </span>
                <IoMdTrophy />
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-800">WINS</h3>
                <span className="text-3xl text-gray-700">{trophys.wins}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-6xl p-4 text-blue-900">
                <IoMdTrophy />
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-800">PODIUMS</h3>
                <span className="text-3xl text-gray-700">
                  {trophys.podiums}
                </span>
              </div>
            </div>
            <img
              className="w-80 h-auto mt-10"
              src={about.image.fluid.src}
            ></img>
          </div>
          <article className="w-45% px-32">
            <h1 className="font-extrabold px-2 text-gray-800">
              {about.title.toUpperCase()}
            </h1>
            <h2 className="bg-blue-700 w-64 px-2 mb-6 text-gray-100">
              {about.title2.toUpperCase()}
            </h2>
            <p className="mb-4">{about.content.content.split("!!p!!")[0]}</p>
            <p>{about.content.content.split("!!p!!")[1]}</p>
          </article>
          <AboutCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
