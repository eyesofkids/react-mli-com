'use client'

import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '../_data/books.json'

// 實心圖
import bookmarkIconFill from '../_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '../_icons/bookmark.svg'

export default function List() {
  // 擴充原本的資料多一個屬性來代表是否有加入收藏(布林值，預設為false)
  const initState = data.map((v) => {
    return { ...v, bookmark: false }
  })

  // 宣告狀態
  const [books, setBooks] = useState(initState)

  // 處理點按事件
  const handleToggleBookmark = (bookIsbn) => {
    const nextBooks = books.map((book) => {
      // 如果找到isbn為booksIsbn的成員，則作bookmark屬性的反相
      if (book.isbn === bookIsbn) return { ...book, bookmark: !book.bookmark }
      // 其它物件直接返回
      else return book
    })

    // 3
    setBooks(nextBooks)
  }

  return (
    <>
      <h1>書籍清單(props屬性練習)</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>標題</th>
            <th>作者</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.isbn}>
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
            )
          })}
        </tbody>
      </table>
    </>
  )
}
