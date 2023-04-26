import {gql} from 'graphql-request'
import {GRAPHQL_FRAGMENTS} from './fragments'

const GRAPHQL_QUERY = gql`
${GRAPHQL_FRAGMENTS}

query GET_POSTS(
    $categorySlug: StringFilterInput
    $postSlug: StringFilterInput
    $postSearch: StringFilterInput
    $authorSlug: StringFilterInput
    $tagSlug: StringFilterInput
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      data{
        ...settings
      }
    }
    posts(
      sort: $sort
      pagination:{
      	start: $start
      	limit: $limit
      }
      filters:{
        slug:$postSlug
        categories: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tags: { slug: $tagSlug }
        title:$postSearch
      }
    ) {
      data{
        ...post
      }
    }
  }
`