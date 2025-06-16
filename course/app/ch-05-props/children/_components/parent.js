'use client'

export default function Parent({ children }) {
  return (
    <>
      <h2>Parent</h2>
      <div style={{ color: 'red', backgroundColor: 'gray', fontSize: 20 }}>
        {children}
      </div>
    </>
  )
}
