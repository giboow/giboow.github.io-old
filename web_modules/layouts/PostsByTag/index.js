import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Posts from "../../components/Posts"

export default class PostsByTag extends Component {

  static propTypes = {
    params : PropTypes.object.isRequired
  }

  static contextTypes = {
    collection : PropTypes.array.isRequired
  }

  render() {
    const { props, context } = this
    const { tag } = props.params

    const posts = enhanceCollection(context.collection, {
      filter : (post) => Boolean(
        post.tags && post.tags.indexOf(tag) >= 0
      ),
      sort: "date",
      reverse: true
    })

    return (
      <Posts collection={ posts } {...props} />
    )
  }
}
