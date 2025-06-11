'use client' // 在瀏覽器(客戶端)中渲染(執行)的 React 元件
// 以"use"為開頭的在react中稱為"勾(鉤)子(hook)"
// useState是React的勾子(Hook)，用來在函式元件中使用狀態
import { useState } from 'react'
// react元件為預設導出，函式名稱一定要"大寫"開頭(帕斯卡)命名
// 元件的傳入參數是屬性props，屬性必為一個物件
export default function CounterPage() {
  // 宣告一組狀態，陣列解構賦值語法(為了方便命名)
  // [獲得值的變數, 設定值的方法] = useState(初始化值)
  // useState(0)表示初始化狀態為0
  const [total, setTotal] = useState(0)

  // 回傳值代表此元件的render(渲染)呈現結果
  // <>...</> 只有開頭和結尾的標記是jsx中特有的標記(實際上是一個名為Fragment(片段)的元件)
  return (
    <>
      <h1>React計數器</h1>
      <hr />
      <button
        // onClick是react內部加入的"人造(synthetic)事件"屬性
        // 相當於由react在執行前協助進行addEventListener的動作
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {/* 以下加上花括號是為了要在jsx語法中嵌入js的值或表達式 */}
        {total}
      </button>
    </>
  )
}
