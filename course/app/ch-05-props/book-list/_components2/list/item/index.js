'use client'

// 使用Icon元件
import Icon from './icon'

export default function Item({ book = {}, handleToggleBookmark = () => {} }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Icon
            book={book}
            handleToggleBookmark={handleToggleBookmark}
          />
        </td>
      </tr>
    </>
  )
}
