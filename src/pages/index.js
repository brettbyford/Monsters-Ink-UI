import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Artists from "../components/artists"
import Layout from "../components/layout"
import { container, content } from "./index.module.css"

// markup
const IndexPage = () => {
  return (
    <div className={container}>
      <title>Monsters Ink Tatto - Home</title>
      <Layout>
        <div className={content}>
          <StaticImage 
            alt="Monsters Ink Tattoo"
            src="../assets/images/icon-512x512.png" />
        </div>
        <Artists />
      </Layout>
    </div>
  )
}

export default IndexPage
