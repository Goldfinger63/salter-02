// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
    <main>
      <title>Jeff C. Salter</title>
      <h1>Welcome to my website.</h1>
      <p>This is my homepage.</p>
      <p>Let's edit this page next</p>
      <Link to="/about">About Me</Link>
    </main>
    </Layout>
  )
}

// Step 3: Export your component

export default IndexPage