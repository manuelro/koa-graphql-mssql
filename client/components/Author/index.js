import { object } from 'prop-types'

import Book from '../Book'

const Author = ({ author }) => {
  const books = author.books || []
  return (
    <div className="py-4">
      <h2 className="font-bold text-sm">
        {author.name} ({`${books.length} book${books.length > 1 ? 's' : ''}`})
      </h2>

      <ul>
        {
          books.map(item => <li key={item.id} className="py-2"><Book book={item} /></li>)
        }
      </ul>
    </div>
  )
}

Author.propTypes = {
  author: object
}

export default Author