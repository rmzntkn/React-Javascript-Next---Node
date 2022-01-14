import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/wave"

const IndexPage = () => (
  <div>
    <Layout />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>
          Complete courses about best tools and design systems. Prototype and
          build apps with React and Swift.
        </p>

        <p>
          <Link to="/page-2/">Watch the video</Link>
        </p>
        <div className="Logos">
          <img src={"../images/logo-studio.png"} width="50" />
          <img src={"../images/logo-studio.png"} width="50" />
          <img src={"../images/logo-figma.png"} width="50" />
          <img src={"../images/logo-framer.png"} width="50" />
          <img src={"../images/logo-react.png"} width="50" />
          <img src={"../images/logo-swift.png"} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 Courses"
          image={"../images/wallpaper.jpg"}
        />
        <Card
          title="React for designers"
          text="12 Courses"
          image={"../images/wallpaper2.jpg"}
        />
        <Card
          title="Sound Design"
          text="12 Courses"
          image={"../images/wallpaper3.jpg"}
        />
        <Card
          title="Arkit 2"
          text="12 Courses"
          image={"../images/wallpaper4.jpg"}
        />
      </div>
    </div>
    <Section
      image={"../images/wallpaper2.jpg"}
      logo={"../images/logo-react.png"}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
