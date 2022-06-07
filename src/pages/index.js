// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { quoteFont, quoteBlock, quoteAuthor } from "../components/index.module.css"

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
    <main>
      <title>Jeff C. Salter</title>
      <div className={quoteBlock}>
        <h2 className={quoteFont}>"There is nothing worse than a sharp image of a fuzzy concept"</h2>
       <p className={quoteAuthor}>--Ansel Adams--</p>
      </div>
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