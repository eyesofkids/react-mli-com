'use client'
// 子女元件可以透過函式的傳入參數值，得到父母元件傳來的屬性值
// props必定為一個物件
// 傳入參數物件解構語法+預設值語法

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
