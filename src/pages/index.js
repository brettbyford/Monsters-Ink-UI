import * as React from "react"
import Artists from "../components/artists"
import Layout from "../components/layout"

// styles
const pageStyles = {
  backgroundColor: "#000000",
  color: "#ffffff",
  margin: "auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Layout>
        <Artists />
      </Layout>
      
    </main>
  )
}

export default IndexPage
