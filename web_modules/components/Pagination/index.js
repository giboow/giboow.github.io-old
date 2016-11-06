import React, { Component, PropTypes } from "react"
import styles from "./index.css"
import classNames from "classnames/bind"
import { Link } from "react-router"
import { joinUri } from "phenomic"

const cx = classNames.bind(styles)

export default class Pagination extends Component {

  static propTypes = {
    numberOfPosts : PropTypes.number.isRequired,
    page : PropTypes.number.isRequired,
    collection : PropTypes.array.isRequired,
    uri : PropTypes.string.isRequired
  }

  render() {

    const { numberOfPosts, page, collection, uri } = this.props

    const numPages = Math.ceil(collection.length / numberOfPosts)

    return (
      <div>
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
                    "navigation-item--curent" : isCurrent
                  }) }
                    key={ pageIndex }
                  >
                  { !isCurrent ? (
                        <Link to={ joinUri(uri, pageIndex) }>
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
