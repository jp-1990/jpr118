import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Stripes from "./Common/Stripes"

const AboutCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutCard {
        edges {
          node {
            dob
            favCircuit
            firstRace
            hometown
            number
            name
            weight
            otherInterests
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
  const about = data.allContentfulAboutCard.edges[0].node

  return (
    <article>
      <div className=" relative h-40 w-90% flex justify-center">
        <img
          className="absolute rounded-full ml-10% top-0 p-6 border border-blue-800 bg-blue-600 w-65% max-w-290 xl:max-w-none xl:w-90%"
          src={about.image.fluid.src}
          alt="Lorum ipsum"
        ></img>
      </div>
      <div className="relative -z-10 bg-blue-800 rounded-2xl overflow-hidden">
        <div className="w-full relative overflow-hidden flex flex-col justify-center items-center text-gray-100 px-8 pt-32 pb-12 ">
          <Stripes position="absolute" color="blue-700" opacity="30" />

          <h2 className="font-bold py-4">RIDER INFO</h2>
          <ul>
            <li className="pt-1">NAME: {about.name}</li>
            <li className="pt-1">RACE NUMBER: {about.number}</li>
            <li className="pt-1">
              DOB: {new Date(about.dob).toLocaleDateString()}
            </li>
            <li className="pt-1">HOMETOWN: {about.hometown}</li>
            <li className="pt-1">WEIGHT: {about.weight}</li>
            <li className="pt-1">FAV CIRCUIT: {about.favCircuit}</li>
            <li className="pt-1">FIRST RACE: {about.firstRace}</li>
            <br />
            <li className="pt-1">
              OTHER INTERESTS:
              <br /> {about.otherInterests}
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default AboutCard
