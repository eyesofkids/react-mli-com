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
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個副本(必要時深拷貝)，也可以使用structuredClone
          const nextUser = JSON.parse(JSON.stringify(user))
          // 2. 在拷貝出來的新副本上更動
          nextUser.name = '李四'
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        姓名改為 李四
      </button>
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個副本(必要時深拷貝)
          const nextUser = JSON.parse(JSON.stringify(user))
          // 2. 在拷貝出來的新副本上更動
          nextUser.profile.phone = '0912345678'
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        電話改為 0912345678
      </button>
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個副本(必要時深拷貝)
          const nextUser = JSON.parse(JSON.stringify(user))
          // 2. 在拷貝出來的新副本上更動
          nextUser.profile.address.city = '新北市'
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        城市改為 新北市
      </button>
    </>
  )
}
