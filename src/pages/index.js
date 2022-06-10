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
      <div className="cardGroup">
      <Link to="/about">
        <Card 
          title="Web Site Designs"
          text="Secure websites designed with Gatsby.js and React."
          image={require('../images/copenhagen-locks.jpg').default}
        />
      </Link>
      
        <Card 
          title="Cybersecurity"
          text="Protect your websites and data."
          image={require('../images/Dublin0165.jpg').default}
          
        />
      
        <Card 
          title="Thoughts and Ideas"
          text="We will review your current web presence and future ideas."
          image={require('../images/Houth0053.jpg').default}
          
        />
      </div>
      
      
      
      
    </main>
    </Layout>
  )
}

// Step 3: Export your component

export default IndexPage