import { object, any } from 'prop-types'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
 
const DataMutation = ({ mutation, children }) => (
  <Mutation mutation={gql`${mutation}`}>
    {(mutationFunction, { loading, error, data }) => {
      if(loading) return <p>...</p>
      if(error) return <p>Error</p>

      return children({ mutationFunction, data })
    }}
  </Mutation>
)

DataMutation.propTypes = {
  mutation: object,
  children: any
}

export default DataMutation