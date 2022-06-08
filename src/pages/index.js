// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { quoteFont, quoteBlock, quoteAuthor } from "../components/index.module.css"
import { blogTitle } from "../components/blogpost.module.css"
import Card from "../components/card"


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
      <h1 className={blogTitle}>Welcome, how can I help you today?</h1>
      
      
      <div className="Cards">
        <h2>Services we can offer you.</h2>
        <Card 
          title="Secure Web Design & Development"
          text="Web Sites Designed with React and Gatsby.js."
          image={require('../images/copenhagen-locks.jpg')} />
          
        </div>
      <Link to="/about">About Me</Link>
      
    </main>
    </Layout>
  )
}

// Step 3: Export your component

export default IndexPage