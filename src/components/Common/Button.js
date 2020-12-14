import React from "react"

const Button = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="bg-blue-500 text-white px-20em py-5em text-15em"
    >
      {text}
    </button>
  )
}

export default Button
