import React, {Component, PropTypes} from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"

import Classnames from 'classnames/bind'
import styles from './index.css'

const cx = Classnames.bind(styles)

const numberOfLatestPosts = 6

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired
  }

  render() {
    const {context} = this
    const {metadata, collection} = context
    const {pkg} = metadata
    const latestPosts = enhanceCollection(collection, {
      filter: {layout: "Post"},
      sort: "date",
      reverse: true
    }).slice(0, numberOfLatestPosts)

    const extraHeader = (
      <div className={cx('homepage__about')}>
        <div className={cx('homepage__about__layer')}>
          <h1>Bienvenue sur mon blog!</h1>
          <h6 className={cx('homepage__about__twitter')}>
            <a href={'http://twitter.com/' + pkg.twitter}>
              @GiBoOw
            </a>
          </h6>
        </div>
      </div>
    )

    return (
      <Page { ...this.props } displayTitle={false} extraHeader={extraHeader}>
        <h2>{ "Mes derniers articles" }</h2>
        <PagesList pages={ latestPosts }/>
      </Page>
    )
  }
}
