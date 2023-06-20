import * as React from "react"
import Layout from "../components/layout"
import Intake from "../components/consent/intake"
import { container, content } from "./consent.module.css"

// markup
const ConsentPage = () => {
  return (
    <div className={container}>
      <title>Monsters Ink Tatto - Consent Form</title>
      <Layout>
        <div className={content}>
          <Intake></Intake>
        </div>
      </Layout>
    </div>
  )
}

export default ConsentPage
