'use client'

import { useState } from 'react'

export default function JsxCondRenderPage() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX條件式渲染</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}
