import {gql} from 'graphql-request'

export const GRAPHQL_FRAGMENTS = gql`
fragment image on UploadFileEntity {
  id
  attributes{
  alternativeText
  url
  }
}

fragment tag on TagEntity {
  id
  attributes{
    displayName
    slug
  }
}

fragment author on AuthorEntity {
  id
  attributes{
    displayName
    slug
  }
}
fragment category on CategoryEntity {
  id
  attributes{
    displayName
    slug
  }
}


fragment menuLink on ComponentMenuMenuLink {
  id
  link
  text
  newTab
}
fragment post on PostEntity {
  id
  attributes{
  slug
  title
  excerpt
  content
  createdAt
  allowComments
  cover{
    data{
      ...image
    }
  } 
  categories{
    data{
      ...category
    }
  }
  tags{
    data{
      ...tag
    }
  }  
  author{
    data{
      ...author
      }
  }
 }
}

fragment settings on SettingEntity {
  id
  attributes{
    blogName
    blogDescription
    logo{
      data{
        ...image
      }
    }
    menuLink{
      ...menuLink
    }
  }
}

`