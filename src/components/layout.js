import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div class="main-wrapper">
      <div class="main">
        <main>{children}</main>
      </div>
      <Sidebar />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
