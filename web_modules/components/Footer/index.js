import React, {Component, PropTypes} from "react"
import styles from "./index.css"

export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  }

  render() {

    const {pkg} = this.context.metadata

    console.log(pkg)
    return (
      <footer className={ styles.footer }>
        {'Made with ❤️ by '}
        <a href={'http://twitter.com/' + pkg.twitter}
           className={styles.link}>
          {'@' + pkg.twitter}
        </a>
        {" | "}
        <a
          href={ process.env.PHENOMIC_HOMEPAGE }
          className={ styles.link }
        >
          { "Powered by " }
          <span className={ styles.reference }>
            {  `<${ process.env.PHENOMIC_NAME} />` }
          </span>
        </a>
      </footer>
    )
  }
}
