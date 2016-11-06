import React, { PropTypes } from "react"
import { Link } from "react-router"
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
              <li className={ styles.tag } key={ tag }>
                <Link to={ "/tag/"+tag }>{ tag }</Link>
              </li>
            ))
          }
          </ul>
      ) : null
    }
    </div>
  )
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagList
