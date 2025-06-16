'use client'

import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from './_data/books.json'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'

export default function BookListPage() {
  // 有加入到我的收藏的書籍isbn才需要放入到這個狀態中
  const [bookmarks, setBookmarks] = useState(['9781593279509', '9781593277574'])

  // 處理點按事件
  const handleToggleBookmark = (bookIsbn) => {
    // 先判斷是否有在陣列中
    if (bookmarks.includes(bookIsbn)) {
      // 如果有 ===> 移出陣列
      const nextBookmarks = bookmarks.filter((v) => v !== bookIsbn)
      setBookmarks(nextBookmarks)
    } else {
      // 如果沒有 ===> 加入陣列
      const nextBookmarks = [...bookmarks, bookIsbn]
      setBookmarks(nextBookmarks)
    }
  }

  return (
    <>
      <h1>書籍清單</h1>
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
          {data.map((v) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      handleToggleBookmark(v.isbn)
                    }}
                    src={
                      bookmarks.includes(v.isbn)
                        ? bookmarkIconFill
                        : bookmarkIcon
                    }
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
