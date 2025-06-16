'use client'

export default function ChildC({ dataFromChild = '' }) {
  return (
    <>
      <h3>Child(子女元件)-c</h3>
      <p>從child-b來的資料: {dataFromChild}</p>
    </>
  )
}
