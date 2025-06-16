'use client'

import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* 父母(p) 渲染 子女(c) */}
      {/* 透過類似HTML屬性值的方式，指定各種合法的js值傳遞給子女元件 */}
      <Child
        title="react"
        price={100}
        isConnected={false}
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 2 }}
        sum={(x, y) => x + y}
        jsx={<p>hello</p>}
      />
    </>
  )
}
