'use client'

import { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild = () => {} }) {
  const [cData, setCData] = useState('child-b data')

  // 在一開始呈現時呼叫回送資料的函式
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>Child(子女元件)-b</h3>
      <button
        onClick={() => {
          setDataFromChild(cData)
        }}
      >
        送資料給父母
      </button>
    </>
  )
}
