import React, { Component, PropTypes } from "react"
import PagesList from "../../components/PagesList"
import Navigation from "../../components/Pagination"

import enhanceCollection from "phenomic/lib/enhance-collection"

const numberOfPosts = 10

export default class Post extends Component {

  static propTypes = {
    params : PropTypes.shape({
      page : PropTypes.integer,
    }),
  }

  static contextTypes ={
    collection : PropTypes.array,
  }

  render() {

    const { collection } = this.context
    const { page = 1  } = this.props.params
    const postCollection = enhanceCollection(collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })
    const offset = (page-1)*numberOfPosts
    const latestPosts = postCollection.slice(offset, offset+numberOfPosts)

    return (
      <div>
        <PagesList pages={ latestPosts } />
        <Navigation
          page={ page }
          collection={ postCollection }
          numberOfPosts={ numberOfPosts }
          uri={ "/articles" }
        />
      </div>
    )
  }
}
