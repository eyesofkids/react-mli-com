'use client'

import { useState } from 'react'

export default function MySelect() {
  const statusOptions = ['審核中', '處理中', '已完成']
  // select對應的狀態值
  const [status, setStatus] = useState('')

  return (
    <>
      <h2>下拉清單</h2>
      <select
        // 呈現值是狀態目前的值
        value={status}
        // 輸入的任何值，會設定到狀態中
        onChange={(e) => {
          setStatus(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        {statusOptions.map((v, i) => {
          return (
            <option value={v} key={i}>
              {v}
            </option>
          )
        })}
      </select>
    </>
  )
}
