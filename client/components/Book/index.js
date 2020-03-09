import { object } from 'prop-types'
import { useState } from 'react'

// components
import BookTopic from '../BookTopic'
import Chip from '../Chip'

const Book = ({ book }) => {
  const [topics, setTopics] = useState(book.topics || [])

  return (
    <div>
      <h3 className="font-bold text-xs">{book.title}</h3>

      <ul className="flex flex-row justify-start py-1">
        {topics.map((item, index) => (
          <li key={item.id} className="pr-1">
            <BookTopic 
              book={book} 
              topic={item}
              onDelete={data => {
                const topicsCopy = topics.slice()
                topicsCopy.splice(index, 1)
                setTopics(topicsCopy)
              }}
            />
          </li>
        ))}

        <Chip size="xs" className="px-2 bg-green-300 text-green-800 cursor-pointer">+</Chip>
      </ul>
    </div>
  )
}

Book.propTypes = {
  book: object
}

export default Book