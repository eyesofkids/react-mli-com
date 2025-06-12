'use client'

export default function JsxMapPage() {
  const aa = [1, 4, 9, 16]
  const ab = aa.map((v, i) => {
    return <li key={i}>{v * 2}</li>
  })
  // ab = [
  // <li key="0">1</li>,
  // <li key="1">4</li>,
  // <li key="2">9</li>,
  // <li key="3">16</li>
  // ]

  return (
    <>
      <h1>JSX陣列map範例</h1>
      <hr />
      <ul>{ab}</ul>
      {/* 因為jsx語法中的花括號中可以直接插入函式呼叫/表達式，所以可以直接寫 */}
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v * 2}</li>
        })}
      </ul>
    </>
  )
}
