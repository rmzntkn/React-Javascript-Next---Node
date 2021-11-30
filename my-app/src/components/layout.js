/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }

      allContentfulLink {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header />
        {children}

        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer> */}
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
//export const query = graphql``
