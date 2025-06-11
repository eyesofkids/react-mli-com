'use client' // 在瀏覽器(客戶端)中渲染(執行)的 React 元件
// 以"use"為開頭的在react中稱為"勾(鉤)子(hook)"
import { useState } from 'react'
// react元件為預設導出，函式名稱一定要"大寫"開頭(帕斯卡)命名
// 元件的傳入參數是屬性props，屬性必為一個物件
export default function CounterPage() {
  // 宣告一組狀態
  // [獲得值的變數, 設定值的函式] = useState(初始值)
  const [total, setTotal] = useState(0)

  // 回傳值代表此元件的render(渲染)呈現結果
  // <>...</>中寫的是jsx語法
  return (
    <>
      <h1>React計數器</h1>
      <hr />
      <button
        // 在react中的人造事件屬性
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </button>
    </>
  )
}
