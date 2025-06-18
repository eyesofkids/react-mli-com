'use client'

import { useUser } from '@/hooks/use-user'
// 使用Link元件取代a標記(連結)
// 可以保持目前的應用的狀態值(尤其是針對context中的狀態)
import Link from 'next/link'

export default function ProfilePage() {
  const { isAuth, user } = useUser()
  return (
    <>
      <h1>個人資料頁</h1>
      <Link href="/ch-05-props/context-user/login">登入頁</Link>
      <hr />
      <p>會員狀態: {isAuth ? '登入中' : '未登入'}</p>
      <p>姓名: {user?.name}</p>
      <p>email: {user?.email}</p>
    </>
  )
}
