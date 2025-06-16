'use client'

import { useState } from 'react'

import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')

  // 特別定義一組狀態，準備讓child-b送回資料
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent(父母元件)</h2>
      <p>從child-b來的資料: {dataFromChild}</p>
      {/* P -> C */}
      <ChildA pData={pData} />
      {/* C -> P */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
