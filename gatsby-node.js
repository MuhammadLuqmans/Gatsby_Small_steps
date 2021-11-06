// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/myclass",
//     component: require.resolve("./src/templates/Mytem.tsx"),
//     context: {
//       name:"Banana",
//       desc:"Banana Frouites Class"
//     },
//     defer: true,
//   })
// }


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/product/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/product/*"

    // Update the page.
    createPage(page)
  }
}