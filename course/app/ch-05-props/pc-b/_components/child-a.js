'use client'

export default function ChildA({ pData = '' }) {
  return (
    <>
      <h3>Child(子女元件)-a</h3>
      <p>來自Parent(父母元件)的資料: {pData}</p>
    </>
  )
}
