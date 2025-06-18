'use client'

import Image from 'next/image'
// 實心圖
import bookmarkIconFill from './bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './bookmark.svg'

export default function Icon({ book = {}, handleToggleBookmark = () => {} }) {
  return (
    <>
      <Image
        onClick={() => {
          handleToggleBookmark(book.isbn)
        }}
        src={book.bookmark ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
