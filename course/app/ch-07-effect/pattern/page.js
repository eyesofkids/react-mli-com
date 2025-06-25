'use client'

import { useState, useEffect } from 'react'

export default function PatternPage() {
  const [total, setTotal] = useState(0)
  const [total2, setTotal2] = useState(0)

  // 樣式1: 沒有第二個傳入參數
  // 意義: 每次渲染之後都會執行
  // 用途: 特殊自訂勾子，作日誌、除錯用
  useEffect(() => {
    // console.log('每次渲染之後都會執行')
  })

  // 樣式2: 有第二個傳入參數(但保持空陣列)
  // 意義: 第一次渲染後執行一次，之後不會再執行。類似於componentDidMount生命周期方法。
  // 用途: 元件第一次渲染後和伺服器要求資料。自訂事件與第三方js整合(類似虛擬DOM轉變為真實DOM ready的事件)
  useEffect(() => {
    //console.log('第一次渲染後執行一次，之後不會再執行')
  }, [])

  // 樣式3: 有第二個傳入參數(裡面有相依變數)
  // 意義: 第一次渲染後執行一次，之後在相依變數有更動之後，再執行一次。
  useEffect(() => {
    console.log('第一次渲染後執行一次，之後在相依變數有更動之後，再執行一次。')
  }, [total])
  // ^^^^^^^ 這裡放入total狀態，是要監聽total的更動事件(change)

  return (
    <>
      <h1>useEffect的4種樣式</h1>
      <hr />
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        total={total}
      </button>
      <button
        onClick={() => {
          setTotal2(total2 + 1)
        }}
      >
        total2={total2}
      </button>
    </>
  )
}
