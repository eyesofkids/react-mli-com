'use client'

// Reference(引用、參考/參照)
import { useRef } from 'react'

export default function MyInputRef() {
  // 1. 定義一組ref，呼叫完會得到一個物件 `{ current: null }`
  // 等到虛擬DOM轉變為真實DOM之後，react在背後會找到設定的元素實體物件，設定到current屬性上，之後可以用`inputRef.current`進行操作
  const inputRef = useRef(null)

  return (
    <>
      <h2>MyInputRef</h2>
      {/* 2. 加到要套用的元素屬性ref上 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          //3. 可以用`inputRef.current`進行操作(但一樣要要在事件處理函式，或是useEffect中，才能得到"虛擬DOM"的物件實體)
          console.log(inputRef.current)

          alert(inputRef.current.value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          inputRef.current.value = 'abcde'
        }}
      >
        設定值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
    </>
  )
}
