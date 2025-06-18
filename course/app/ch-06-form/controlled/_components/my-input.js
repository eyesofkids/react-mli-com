'use client'

import { useState } from 'react'

export default function MyInput() {
  const [text, setText] = useState('')

  return (
    <>
      <h2>文字輸入框(input-text)</h2>
      <input
        // 文字輸入框呈現值是狀態目前的值
        value={text}
        // 文字輸入框輸入的任何值，會設定到狀態中
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </>
  )
}
