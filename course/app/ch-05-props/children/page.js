'use client'

import Parent from './_components/parent'
import Child from './_components/child'

export default function ChildrenPage() {
  return (
    <>
      <h1>props.children範例</h1>
      <hr />
      {/* 包裹在Parent元件標記中的資料，相當於props.children */}
      {/* 1. 其中什麼都沒有 */}
      <Parent></Parent>
      {/* 2. 其中有一個字串 */}
      <Parent>這是一個字串</Parent>
      {/* 3. 其中有元件 */}
      <Parent>
        <Child />
        <Child />
      </Parent>
    </>
  )
}
