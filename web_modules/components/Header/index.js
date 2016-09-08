import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"
import Svg from "react-svg-inline"
import twitterSvg from "../../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../../icons/iconmonstr-github-1.svg"

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              { pkg.config.siteName }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            <Link to="/posts" className={ styles.link }>{ "Articles" }</Link>
            <Link to="/about" className={ styles.link }>{ "A propos" }</Link>
            { pkg.twitter &&
              <a
                href={ `https://twitter.com/${pkg.twitter}` }
                className={ styles.link }
              >
                <Svg svg={ twitterSvg } />
                  { "Twitter" }
              </a>
            }
            { pkg.repository &&
              <a
                href={ pkg.repository }
                className={ styles.link }
              >
                <Svg svg={ gitHubSvg } />
                { "GitHub" }
              </a>
            }
          </div>
        </nav>
      </header>
    )
  }
}
