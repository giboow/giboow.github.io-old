import React, { Component, PropTypes } from "react"
import DisqusCounter from "react-disqus-counter"

export default class Counter extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  static propTypes = {
    shortname : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    content : PropTypes.string,
    doUpdate : PropTypes.boolean,
    children : PropTypes.element,
  }

  render() {
    const { props, context } = this
    const { pkg } = context.metadata

    let disqusShortname = pkg.config.disqus.shortname

    return (
      <DisqusCounter
        shortname={ disqusShortname }
        url={ props.url }
      >
        { this.props.children }
      </ DisqusCounter>
    )
  }
}
