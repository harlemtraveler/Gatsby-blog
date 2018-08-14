import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter{
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;

// To learn about the query options for markdown files, vist
// https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=remark
