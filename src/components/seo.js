
import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO ({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description ?  description : site.siteMetadata.description;
  const metalang = 'uk'
  const metaTitle = title ? title : ''
  return (
    <Helmet
      htmlAttributes={{
        metalang,
      }}
      title={metaTitle}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property:`og:site_name`,
          content: "BOYARCAMP",
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property:`og:image:width`,
          content: "1200",
        },
        {
          property:`og:image:height`,
          content: "630",
        },
        {
          property:`og:locale`,
          content: "uk",
        },
        {
          property: `twitter:card`,
          content:  `summary_large_image`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords.join(),
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `uk`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
