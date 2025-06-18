'use client'

import { useState } from 'react'

export default function MyCheckboxes() {
  // 選項用字串陣列(或來自資料庫可以用物件陣列)
  const typeOptions = ['車禍理賠', '醫療理賠', '財產損失']
  // 先轉換為物件陣列，並加入屬性其一布林值來對應核取方塊
  const initState = typeOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })
  // 定義狀態
  const [typeValues, setTypeValues] = useState(initState)

  // 處理點按事件
  const handleToggle = (id) => {
    const nextTypeValues = typeValues.map((v) => {
      // 如果找到v.id為id的成員，則作checked屬性的反相
      if (v.id === id) return { ...v, checked: !v.checked }
      // 其它物件直接返回
      else return v
    })

    // 3
    setTypeValues(nextTypeValues)
  }

  return (
    <>
      <h2>核取方塊群組(checkboxes)</h2>
      {typeValues.map((v, i) => {
        return (
          <div key={v.id}>
            <input
              type="checkbox"
              value={v.label}
              checked={v.checked}
              onChange={() => {
                handleToggle(v.id)
              }}
            />
            {v.label}
          </div>
        )
      })}
    </>
  )
}
