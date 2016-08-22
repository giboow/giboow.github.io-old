import React, { Component, PropTypes } from "react"

import ReactDisqusThread from "react-disqus-thread"

export default class Comment extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  static propTypes = {
    head: PropTypes.object.isRequired,
    __url: PropTypes.string.isRequired,
  }

  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    return (
      <ReactDisqusThread
        shortname={ pkg.config.disqus.shortname }
        identifier={ props.head.date }
        title={ props.head.title }
        url={ pkg.homepage + props.__url }
        category_id="123456"
      />
    )
  }

}
