import React, { Component } from "react"
import { Route } from "react-router"

import LayoutContainer from "../components/LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Homepage from "../layouts/Homepage"
import Post from "../layouts/Post"
import Posts from "../layouts/Posts"

import PostsByTag from "../components/PostsByTag"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Homepage,
          Post,
        } }
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="tag/:tag" component={ PostsByTag } />
    <Route path="posts(/:page)" component={ Posts } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
