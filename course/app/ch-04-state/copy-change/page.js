'use client'

import { useState } from 'react'

export default function CopyChangePage() {
  const [user, setUser] = useState({
    name: '張三',
    profile: {
      phone: '0911123456',
      address: {
        city: '台北市',
      },
    },
  })

  return (
    <>
      <h1>拷貝與狀態更動</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      <button onClick={() => {}}>姓名改為 李四</button>
      <button onClick={() => {}}>電話改為 0912345678</button>
      <button onClick={() => {}}>城市改為 新北市</button>
    </>
  )
}
