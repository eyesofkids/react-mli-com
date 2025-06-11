'use client'

// 導入時就自動轉為JS資料格式
import data from './_data/Product.json'

export default function ProductTablePage() {
  // console.log(data)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  )
}
