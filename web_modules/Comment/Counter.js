/* global DISQUSWIDGETS */

import React, { Component, PropTypes } from "react"

let __scriptAdded = false

export default class Counter extends Component {
  static propTypes = {
    shortname : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    content : PropTypes.string,
    isLink : PropTypes.bool,
    style : PropTypes.string,
  }

  static defaultProps = {
    content : "",
    isLink : false,
  }

  componentWillMount() {
    this._addDisqusScript()
  }

  componentDidMount() {
    this._resetComments()
  }

  componentDidUpdate() {
    this._resetComments()
  }

  _resetComments() {
    if (typeof DISQUSWIDGETS !== "undefined") {
      DISQUSWIDGETS.getCount({ reset:true })
    }
  }

  _addDisqusScript() {
    if (__scriptAdded) {
      return
    }

    const script = document.createElement("script")
    const parent = document.getElementsByTagName("head")[0] ||
                 document.getElementsByTagName("body")[0]

    script.id = "dsq-count-scr"
    script.src = "//"+this.props.shortname+".disqus.com/count.js"
    script.async = true

    parent.appendChild(script)

    __scriptAdded = true
  }

  render() {
    let counterElement
    if (this.props.isLink) {
      counterElement = React.createElement(
        "a", { href :  this.props.url + "#disqus_thread" },
        this.props.content
      )
    }
    else {
      counterElement = React.createElement(
        "span",
        {
          className : [ "disqus-comment-count" ],
          "data-disqus-url" :  this.props.url,
        },
        this.props.content
      )
    }
    return (
      counterElement
    )
  }
}
