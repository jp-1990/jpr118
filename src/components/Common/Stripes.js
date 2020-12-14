import React from "react"

const Stripes = ({ position, color, opacity }) => {
  return (
    <div
      className={`w-full h-full bg-transparent flex-row ${
        position ? position : "relative"
      } -z-10`}
    >
      <div
        className={`bg-${color} absolute opacity-${opacity}`}
        style={{
          height: "180%",
          width: "10%",
          left: "32%",
          top: "-25%",
          transform: "rotate(20deg)",
        }}
      ></div>
      <div
        className={`bg-${color} absolute opacity-${opacity * 1 + 10}`}
        style={{
          height: "180%",
          width: "6%",
          left: "45%",
          top: "-25%",
          transform: "rotate(20deg)",
        }}
      ></div>
      <div
        className={`bg-${color} absolute opacity-${opacity * 1 + 20}`}
        style={{
          height: "180%",
          width: "50%",
          left: "61%",
          top: "-25%",
          transform: "rotate(20deg)",
        }}
      ></div>
    </div>
  )
}

export default Stripes
