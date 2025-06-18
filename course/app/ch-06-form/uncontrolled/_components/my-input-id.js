'use client'

export default function MyInputId() {
  return (
    <>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
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
