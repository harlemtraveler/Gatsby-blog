const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type == 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts'
    });
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`
    })
  }
}
