import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "./styles/style.css"
import {container, mainContent, content} from "./layout.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Layout = props => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            title
        }
      }
    }
  `)
    return (
        <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <div className={content}>
            <Header />
            <div className={mainContent}>{props.children}</div>
            </div>
            <Footer />
        </div>
    )
}
export default Layout