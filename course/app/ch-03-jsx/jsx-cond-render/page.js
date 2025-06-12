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
      {/* 三元運算子 */}
      {total !== 0 ? <p>1.目前total的值是{total}</p> : ''}
      {total > 0 ? <p>2.目前total的值是{total}</p> : ''}
      {/* 內聯式if (inline if) */}
      {/* 因為`&&`會使用falsy進行運算，0與NaN都會呈現，造成不精確的結果 */}
      {total && <p>3.目前total的值是{total}</p>}
      {/* 將用於條件的運算式(值)強制轉為布林值 */}
      {Boolean(total) && <p>4.目前total的值是{total}</p>}
      {!!total && <p>4.目前total的值是{total}</p>}
      {/* 用比較運算子，寫清楚條件 */}
      {total !== 0 && <p>5.目前total的值是{total}</p>}
      {total > 0 && <p>6.目前total的值是{total}</p>}
    </>
  )
}
