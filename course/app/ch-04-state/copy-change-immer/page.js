'use client'

import { useState } from 'react'
// 使用immer
import { produce } from 'immer'

export default function CopyChangeImmerPage() {
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
      <h1>拷貝與狀態更動(immer)</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      <button
        onClick={() => {
          // 在immer中的draft(草稿狀態)，是用proxy產生的複本狀態，其中可以直接修改
          const nextUser = produce(user, (draft) => {
            draft.name = '李四'
          })
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        姓名改為 李四
      </button>
      <button
        onClick={() => {
          const nextUser = produce(user, (draft) => {
            draft.profile.phone = '0912345678'
          })
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        電話改為 0912345678
      </button>
      <button
        onClick={() => {
          const nextUser = produce(user, (draft) => {
            draft.profile.address.city = '新北市'
          })
          // 3. 呼叫setState設定到狀態
          setUser(nextUser)
        }}
      >
        城市改為 新北市
      </button>
    </>
  )
}
