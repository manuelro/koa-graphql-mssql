import { object, any } from 'prop-types'

// components
import Chip from '../Chip'

const Topic = ({ topic, rightAction }) => {
  return (
    <Chip 
      size="xs"
      className="bg-white"
      rightAction={rightAction}
    >
      {topic.label}
    </Chip>
  )
}

Topic.protTypes = {
  topic: object.isRequired,
  rightAction: any
}

export default Topic