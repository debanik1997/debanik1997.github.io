import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"

import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div class="main-wrapper">
      <Helmet>
        <title>👋, Debanik here.</title>
        <meta name="title" content="👋, Debanik here." />
        <meta name="description" content="Welcome :)" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://debanikpurkayastha.com/" />
        <meta property="og:title" content="👋, Debanik here." />
        <meta property="og:description" content="Welcome :)" />
        <meta property="og:image" content="https://debanikpurkayastha.com/screenview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://debanikpurkayastha.com/"
        />
        <meta property="twitter:title" content="👋, Debanik here." />
        <meta property="twitter:description" content="Welcome :)" />
        <meta property="twitter:image" content="https://debanikpurkayastha.com/screenview.png" />
      </Helmet>
      <div className="all-children">
        <main>{children}</main>
      </div>
      <Navbar />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
