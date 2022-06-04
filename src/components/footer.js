import * as React from "react"
import {container, siteFooter} from "./footer.module.css"
import {useStaticQuery, graphql} from "gatsby"


const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    return (
        <footer className={siteFooter}>
            <div className={container}>
                <p>Site developed by {data.site.siteMetadata.author} &copy; {new Date().getFullYear().toString()}{" "}</p>
            </div>
        </footer>
    )
}
export default Footer