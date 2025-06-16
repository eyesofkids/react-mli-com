'use client'

import { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild = () => {} }) {
  const [cData, setCData] = useState('child-b data')

  // 解決方案1: 在一開始呈現時呼叫回送資料的函式
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>Child(子女元件)-b</h3>
      <button
        onClick={() => {
          // 解決方案2: 事件觸發時的處理函式中呼叫回送資料的函式
          setDataFromChild(cData)
        }}
      >
        送資料給父母
      </button>
    </>
  )
}
