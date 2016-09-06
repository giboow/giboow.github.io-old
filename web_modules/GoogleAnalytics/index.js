import React, { Component, PropTypes } from "react"
import ReactGoogleAnalytics from "react-g-analytics"

export default class GoogleAnalytics extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  render() {

    const {
      pkg,
    } = this.context.metadata

    return (
       <ReactGoogleAnalytics id={ pkg.config.GoogleAnalyticsId } />
    )
  }
}
