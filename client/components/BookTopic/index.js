import { object, func } from 'prop-types'
import { gql } from 'apollo-boost'

// components
import Topic from '../Topic'
import DataMutation from '../DataMutation'
import Chip from '../Chip'

const BookTopic = ({ book, topic, onDelete }) => (
  <Topic 
    topic={topic}
    rightAction={
      <DataMutation
        mutation={gql`
          mutation detachTopicFromBook($topicId: Int!, $bookId: Int!){
            detachTopicFromBook(topicId: $topicId, bookId: $bookId){
              book
              topic
            }
          }
        `}
      >
        {
          params => {    
            if(params.data) onDelete(params.data)
            
            return (
              <Chip 
                size="xs"
                className="bg-red-300 text-red-800 cursor-pointer"
                onClick={() => {
                  params.mutationFunction({
                    variables: { topicId: +topic.id, bookId: +book.id }
                  })
                }}
              >x</Chip>
            )
          }
        }
      </DataMutation>
    }
  />
)

BookTopic.propTypes = {
  topic: object.isRequired,
  book: object.isRequired,
  onDelete: func
}

BookTopic.defaultProps = {
  onDelete: () => null
}

export default BookTopic