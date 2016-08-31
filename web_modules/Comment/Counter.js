import React, { Component, PropTypes } from "react"
import DisqusCounter from "react-disqus-counter"

export default class Counter extends Component {
  static propTypes = {
    shortname : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    content : PropTypes.string,
  }

  render() {
    return (
      <DisqusCounter
        shortname="http-giboow-fr"
        url="http://giboow.fr/posts/my-first-post/"
      />
    )
  }
}
