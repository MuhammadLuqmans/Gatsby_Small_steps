import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ProductOne from "../components/product1"
import Main from "../components/main"
import ProductTwo from "../components/product2"
import { Link } from "gatsby"


const App = () => {
  return (
    <Layout>
        <Link to="/product/page1" > Page 1</Link>
        <Link to="/product/page2" > Page 1</Link>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <ProductTwo path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default App