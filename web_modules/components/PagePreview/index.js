import React, { PropTypes } from "react"
import { Link } from "react-router"

import TagList from "../TagList"

const PagePreview = ({ __url, title, date, tags = [] }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
      {
        pageDate &&
        <small>
          { " " }
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        </small>
      }
      <TagList tags={ tags } />
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  tags: PropTypes.array
}

export default PagePreview
