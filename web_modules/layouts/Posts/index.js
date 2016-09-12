import React, { Component, PropTypes } from "react"
import PagesList from "../../components/PagesList"
import enhanceCollection from "phenomic/lib/enhance-collection"
import styles from "./index.css"
import classNames from "classnames/bind"
import { Link } from "react-router"

const cx = classNames.bind(styles)

const numberOfPosts = 1

export default class Post extends Component {

  static propTypes = {
    params : PropTypes.object,
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
    const numPages = Math.ceil(postCollection.length / numberOfPosts)

    return (
      <div>
        <PagesList pages={ latestPosts } />
        {
          numPages > 1
          ? (
            <ul className={ styles.navigation }>
              {
                [ ...Array(numPages) ].map((x, i) => {

                  const pageIndex = i + 1
                  const isCurrent = Boolean(pageIndex == page)
                  return (
                      <li className={ cx({
                        "navigation-item" : true,
                        "navigation-item--curent" : isCurrent,
                      }) }
                        key={ pageIndex }
                      >
                      { !isCurrent ? (
                            <Link to={ "/articles/" +pageIndex }>
                              { pageIndex }
                            </Link>
                         ) : (pageIndex)
                      }

                    </li>
                    )
                }
                )
              }
            </ul>
          ) : null
        }
      </div>
    )
  }
}
