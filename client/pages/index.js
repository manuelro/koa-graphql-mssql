import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'node-fetch'
import { ApolloProvider } from 'react-apollo'

import './index.css'

// components
import DataQuery from '../components/DataQuery'
import Author from '../components/Author'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  fetch
})

const getBooks = gql`{
  authors {
    email
    name
    books {
      id
      title
      topics{
        id
        label
      }
    }
  }
}`

const Index = props => {
  return (
    <ApolloProvider client={client}>
      <DataQuery query={getBooks}>
        {
          data => {
            return (
              <>
                <header className="text-lg font-bold">
                  Books by Author
                </header>
                {data.authors.map(item => <Author key={item.email} author={item} />)}
              </>
            )
          }
        }
      </DataQuery>
    </ApolloProvider>
  )
}

export default Index
