import React from "react"

const Stripes = ({ position, color, opacity, uniform }) => {
  return (
    <div
      className={`w-full h-full bg-transparent flex-row ${
        position ? position : "relative"
      } -z-10`}
    >
      <div
        className={`bg-${color} absolute`}
        style={{
          height: "180%",
          width: "10%",
          left: "32%",
          top: "-25%",
          transform: "rotate(20deg)",
          opacity: `${opacity / 100}`,
        }}
      ></div>
      <div
        className={`bg-${color} absolute`}
        style={{
          height: "180%",
          width: "6%",
          left: "45%",
          top: "-25%",
          transform: "rotate(20deg)",
          opacity: `${
            uniform === true ? opacity / 100 : opacity / 100 + 10 / 100
          }`,
        }}
      ></div>
      <div
        className={`bg-${color} absolute`}
        style={{
          height: "180%",
          width: "50%",
          left: "61%",
          top: "-25%",
          transform: "rotate(20deg)",
          opacity: `${
            uniform === true ? opacity / 100 : opacity / 100 + 20 / 100
          }`,
        }}
      ></div>
    </div>
  )
}

export default Stripes
