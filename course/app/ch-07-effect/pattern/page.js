'use client'

import { useState, useEffect } from 'react'

export default function PatternPage() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>useEffect的4種樣式</h1>
      <hr />
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </button>
    </>
  )
}
