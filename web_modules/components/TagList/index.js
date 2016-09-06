import React, { PropTypes } from "react"
import styles from "./index.css"

const TagList = ({ tags }) => {

  return (
    <div className={ styles.container }>
    {
      tags.length
      ? (
          <ul className={ styles.tagList }>
          {
            tags.map((tag) => (
              <li className={ styles.tag } key={ tag }>{ tag }</li>
            ))
          }
          </ul>
      ) : null
    }
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagList
