import React, { Component, PropTypes } from "react"
import PagesList from "../../components/PagesList"
import enhanceCollection from "phenomic/lib/enhance-collection"
import styles from "./index.css"

const numberOfPosts = 1

export default class Post extends Component {

  static contextTypes ={
    collection : PropTypes.array,
  }

  render() {

    const collection = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })

    const latestPosts = collection.slice(0, numberOfPosts)
    const numPages = Math.ceil(collection.length / numberOfPosts)
    console.log(numPages)
    return (
      <div>
        <PagesList pages={ latestPosts } />
        {
          numPages > 1
          ? (
            <ul className={ styles.navigation }>
              {
                [ ...Array(numPages) ].map((x, i) =>
                  <li key={ i }>{ i + 1 }</li>
                )
              }
            </ul>
          ) : null
        }
      </div>
    )
  }
}
