import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Stripes from "../components/Common/Stripes"
import GalleryModal from "../components/GalleryModal"
import Nav from "../components/Layout/Nav"
import Seo from "../components/Layout/Seo"
import Footer from "../components/Layout/Footer"

const Gallery = () => {
  const [active, setActive] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      allContentfulGalleryImage {
        edges {
          node {
            date
            image {
              fluid {
                src
              }
            }
            imageDescription {
              imageDescription
            }
          }
        }
      }
    }
  `)
  const galleryItems = data.allContentfulGalleryImage.edges

  // build gallery index
  const galleryIndex = galleryItems.map((e, i) => {
    return (
      <div key={i} className="relative flex m-2">
        <button className="group w-full" onClick={() => setActive(i)}>
          <div className="absolute top-0 left-0 z-10 bg-black w-full h-full opacity-20 group-hover:opacity-0 transition duration-500"></div>
          <div className="focus:outline-none relative w-full h-0 pb-60% overflow-hidden">
            <img
              className="absolute"
              src={e.node.image.fluid.src}
              alt="lorem ipsum"
            ></img>
          </div>
        </button>
      </div>
    )
  })

  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
        <Stripes position="absolute" color="gray-200" opacity="30" />
        <Seo title="Gallery" />
        <Nav />
        <h1 className="text-gray-500 font-extrabold p-10 3xl:text-6xl 3xl:p-16">
          Gallery
        </h1>
        <section className="w-full px-15% mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {galleryIndex}
        </section>
        {active !== false ? (
          <GalleryModal
            data={galleryItems}
            active={active}
            setActive={setActive}
          />
        ) : null}
      </div>
      <Footer />
    </>
  )
}

export default Gallery
