import React, { Component, PropTypes } from "react"

import Page from "../Page"
import Comment from "../../components/Comment"
import CommentCounter from "../../components/Comment/Counter"
import styles from "./index.css"

class Post extends Component {
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  static propTypes = {
    head: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      updateCommentCounter : false,
    }
  }

  handleNewComment() {
  }

  render() {
    const { props, context } = this
    const { head } = props

    const pageDate = head.date ? new Date(head.date) : null

    const {
      pkg,
    } = context.metadata

    let url= pkg.homepage + props.__url
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
                url={ url }
              />
            </div>
          </header>
        }
      >
        <Comment {...props}
          onNewComment={ this.handleNewComment }
          url={ url }
        />
      </Page>
    )
  }
}

export default Post
