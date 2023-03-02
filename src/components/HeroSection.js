import React from "react"
import { Link } from "gatsby"

function HeroSection() {
  return (
    <>
      <Link to="/">
        <img
          src="images/diamond-svgrepo-com.svg"
          width={64}
          alt="logo"
        />
      </Link>
      <h1>
        Must shinning{" "}
        <span role="img" aria-label="shinning">
          🎈
        </span>
      </h1>
    </>
  )
}

export default HeroSection
