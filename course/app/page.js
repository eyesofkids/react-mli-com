'use client'

import React, { useState, useEffect } from 'react'

export default function AppPage(props) {
  const [total, setTotal] = useState({
    count: 1,
  })
  return (
    <>
      <h1>{total.count}</h1>
      <button
        onClick={() => {
          const nextTotal = { ...total }
          nextTotal.count += 1
          setTotal(nextTotal)
        }}
      >
        +1
      </button>
    </>
  )
}
