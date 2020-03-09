import { object, any } from 'prop-types'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
 
const DataQuery = ({ query, children }) => (
  <Query query={gql`${query}`}>
    {({ loading, error, data }) => {
      if(loading) return <p>Loading...</p>
      if(error) return <p>Error</p>

      return children(data)
    }}
  </Query>
)

DataQuery.propTypes = {
  query: object,
  children: any
}

export default DataQuery