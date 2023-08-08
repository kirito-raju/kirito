import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
  <header className="hero">
    <div className="section-center hero-center d-flex">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>BlackSwordmen Kirito</h1>
          <h4>Dual Sword wielder in Sword Art Online and a beta test player</h4>
          <Link to="/contact" className="btn">contact me</Link>
        </div>
        <SocialLinks />
      </article>
      <StaticImage
        src="../assets/images/hero.jpg"
        alt="portfolio"
        className="hero-img"
      />
    </div>
 
  </header>  
  )
}

export default Hero
