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
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XXX</td>
            <td>XXX</td>
            <td>XXX</td>
            <td>
              <Image src={bookmarkIcon} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
