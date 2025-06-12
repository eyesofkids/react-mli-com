'use client'

// 利用import可以直接導入json檔案，導入後會自動轉換為js的資料格式
import data from './_data/insurance-claim.json'

// {
//     "id": "CL-2023-001",
//     "customer": "王小明",
//     "type": "車禍理賠",
//     "date": "2023-05-15",
//     "amount": 45000,
//     "status": "處理中"
//   }

export default function ClaimTablePage() {
  console.log(data)

  return (
    <>
      <h1>保險理賠表格</h1>
      <hr />
      <table border="1">
        <thead>
          <th>ID</th>
          <th>姓名</th>
          <th>類型</th>
          <th>日期</th>
          <th>金額</th>
          <th>狀態</th>
        </thead>
        <tbody>
          {data.map((v, i) => {
            /* key值加在最靠近return的元素上，使用資料的id值是最佳選擇  */
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.customer}</td>
                <td>{v.type}</td>
                <td>{v.date}</td>
                <td>{v.amount}</td>
                <td>{v.status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
