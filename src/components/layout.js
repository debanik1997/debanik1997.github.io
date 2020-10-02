import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div class="main-wrapper">
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
