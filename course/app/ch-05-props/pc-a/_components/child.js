'use client'
// 子女元件可以透過函式的傳入參數值，得到父母元件傳來的屬性值
// props必定為一個物件
export default function Child(props) {
  console.log(props)

  return (
    <>
      <h3>Child(子女元件)</h3>
      <p>{props.title}</p>
      <p>{props.price}</p>
    </>
  )
}
