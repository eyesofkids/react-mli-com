'use client'
// 子女元件可以透過函式的傳入參數值，得到父母元件傳來的屬性值
// props必定為一個物件

// 可以用"傳入參數物件解構語法+預設值語法"，提取每個props中的物件屬性名為變數名稱
// 目的1: 讓程式碼更簡潔，減少冗餘語法
// 目的2: 開發工具可以協助自動完成
// 目的3: 定義預設屬性值(有助於元件穩健性)，預設值需要和給定的值資料類型一致
export default function Child({
  title = '',
  price = 0,
  isConnected = true,
  aa = [],
  oa = {},
  sum = () => {},
  jsx = <></>,
}) {
  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>title={title}</p>
      <p>price={price}</p>
      <p>isConnected={JSON.stringify(isConnected)}</p>
      <p>aa={JSON.stringify(aa)}</p>
      <p>oa={JSON.stringify(oa)}</p>
      <p>sum(1,2)={sum(1, 2)}</p>
      {jsx}
    </>
  )
}
