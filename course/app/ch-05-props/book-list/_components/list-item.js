'use client'

// 使用Icon元件
import ListItemIcon from './list-item-icon'

export default function ListItem({
  book = {},
  handleToggleBookmark = () => {},
}) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <ListItemIcon
            book={book}
            handleToggleBookmark={handleToggleBookmark}
          />
        </td>
      </tr>
    </>
  )
}
