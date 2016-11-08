import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../components/PagesList"

import Classnames from 'classnames/bind'
import styles from './index.css'

const cx = Classnames.bind(styles)

const numberOfLatestPosts = 6

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true
    })
    .slice(0, numberOfLatestPosts)


    const extraHeader = (
      <div className={cx('homepage__about')}>
        <div className={cx('homepage__about__layer')}>
          <h1>Bonjour, je suis Giboow, et voici mon espace de partage!</h1>
        </div>
      </div>
    )

    return (
      <Page { ...this.props } displayTitle={false} extraHeader={extraHeader}>
        <h2>{ "Latest Posts" }</h2>
        <PagesList pages={ latestPosts } />
      </Page>
    )
  }
}
