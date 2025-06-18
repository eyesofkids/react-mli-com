'use client'

import { useState } from 'react'

export default function MyRadioButtons() {
  // 選項用字串陣列(或來自資料庫可以用物件陣列)
  const typeOptions = ['車禍理賠', '醫療理賠', '財產損失']

  // 保險類型用狀態
  const [typeValue, setTypeValue] = useState('')

  return (
    <>
      <h2>選項按鈕群組(radio buttons)</h2>
      {typeOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              // 以個別的選項按鈕來比對目前選中的狀態
              checked={typeValue === v}
              // 輸入的任何值，會設定到狀態中
              onChange={(e) => {
                setTypeValue(e.target.value)
              }}
            />
            {v}
          </div>
        )
      })}
    </>
  )
}
