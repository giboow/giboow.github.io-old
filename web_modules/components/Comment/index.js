import React, { Component, PropTypes } from "react"

import ReactDisqusThread from "react-disqus-thread"

export default class Comment extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  static propTypes = {
    head: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    onNewComment : PropTypes.function,
  }

  static defaultProps = {
    onNewComment : null,
  };

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
        onNewComment={ props.onNewComment }
        url={ props.url }
      />
    )
  }

}
