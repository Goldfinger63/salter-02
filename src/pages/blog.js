// Step 1: Import React
import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"


// Step 2: Define your component
const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMM, YYYY")
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <main>
        <title>My Courses</title>
        <h1>These are the courses I am teaching or developing.</h1>
          <ul>
            {data.allMarkdownRemark.edges.map(edge =>{
              return (
                <li key={edge.node.id}>
                  <h2>
                    <Link to={`/blog/${edge.node.fields.slug}/`}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <div>
                    <span>
                      Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                      {edge.node.timeToRead} min read
                    </span>
                  </div>
                    <p>{edge.node.excerpt}</p>
                </li>
              )
            })}
          </ul>
  <Link to="/about">About Me</Link>
</main>
</Layout>
)
}


// Step 3:  Export your component
export default BlogPage
