'use client'

import { useState } from 'react'

export default function MyTextarea() {
  const [text, setText] = useState('')

  return (
    <>
      <h2>文字輸入區域(textarea)</h2>
      <textarea
        // 文字輸入框呈現值是狀態目前的值
        value={text}
        // 文字輸入框輸入的任何值，會設定到狀態中
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <p>補充: 輸入後純文字呈現換行(替換為p標記)</p>
      {text.split('\n').map((v, i) => {
        return <p key={i}>{v}</p>
      })}
    </>
  )
}
