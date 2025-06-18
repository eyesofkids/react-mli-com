'use client'

import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '../_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '../_icons/bookmark.svg'

export default function Item({ book = {}, handleToggleBookmark = () => {} }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Image
            onClick={() => {
              handleToggleBookmark(book.isbn)
            }}
            src={book.bookmark ? bookmarkIconFill : bookmarkIcon}
            alt=""
          />
        </td>
      </tr>
    </>
  )
}
