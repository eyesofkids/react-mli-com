'use client'

export default function MyInputId() {
  // 在這裡執行是得不到"虛擬DOM"元素的物件實體的(執行周期的關係)
  // console.log(document.querySelector('#my-input'))

  return (
    <>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          // 要在事件處理函式，或是useEffect中，才能得到"虛擬DOM"的物件實體
          console.log(document.querySelector('#my-input'))

          alert(document.querySelector('#my-input').value)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').value = 'abcde'
        }}
      >
        設定值
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
    </>
  )
}
