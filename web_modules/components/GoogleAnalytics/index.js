import React, { Component, PropTypes } from "react"
import ReactGoogleAnalytics from "react-g-analytics"

const isBrowser = (typeof window !== "undefined")
const isProduction = process.env.NODE_ENV === "production"

export default class GoogleAnalytics extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  }

  render() {

    const {
      pkg
    } = this.context.metadata

    return (
      isProduction && isBrowser &&
        <ReactGoogleAnalytics id={ pkg.config.GoogleAnalyticsId } />
    )
  }
}
