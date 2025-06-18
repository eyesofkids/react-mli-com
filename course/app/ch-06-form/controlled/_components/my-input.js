'use client'

import { useState } from 'react'

export default function MyInput() {
  const [text, setText] = useState('')
  // 密碼輸入框用
  const [pass, setPass] = useState('')
  // 呈現密碼用(也對應 核取方塊 的checked值)
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>文字輸入框(input-text)</h2>
      <input
        type="text"
        // 文字輸入框呈現值是狀態目前的值
        value={text}
        // 文字輸入框輸入的任何值，會設定到狀態中
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h2>密碼輸入框(input-password)</h2>
      <input
        type={show ? 'text' : 'password'}
        // 文字輸入框呈現值是狀態目前的值
        value={pass}
        // 文字輸入框輸入的任何值，會設定到狀態中
        onChange={(e) => {
          setPass(e.target.value)
        }}
      />
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => {
          setShow(e.target.checked)
        }}
      />
      顯示密碼
      <h2>數字輸入框(input-number)</h2>
      <input type="number" />
      <h2>日期輸入框(input-date)</h2>
      <input type="date" />
    </>
  )
}
