import React, { Component, PropTypes } from "react"

import Page from "../Page"
import Comment from "../../Comment"
import CommentCounter from "../../Comment/Counter"
import styles from "./index.css"

class Post extends Component {

  static propTypes = {
    head: PropTypes.object.isRequired,
  }
  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props

    const pageDate = head.date ? new Date(head.date) : null

    return (

      <Page
        { ...props }
        header={
          <header>
          {
            pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
          }
            <div className={ styles.CommentCounter }>
              <CommentCounter
                shortname="http-giboow-fr"
                url="http://giboow.fr/posts/my-first-post/"
              />
            </div>
          </header>
        }
      >
        <Comment {...props} />
      </Page>
    )
  }
}

export default Post
