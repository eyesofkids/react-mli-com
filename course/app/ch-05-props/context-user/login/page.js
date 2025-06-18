'use client'

import { useUser } from '@/hooks/use-user'
// 使用Link元件取代a標記(連結)
// 可以保持目前的應用的狀態值(尤其是針對context中的狀態)
import Link from 'next/link'

export default function LoginPage() {
  const { isAuth, login, logout } = useUser()

  return (
    <>
      <h1>登入頁</h1>
      <Link href="/ch-05-props/context-user/profile">個人資料頁</Link>
      <hr />
      <p>{isAuth ? '登入中' : '未登入'}</p>
      <button onClick={login}>登入</button>
      <button onClick={logout}>登出</button>
    </>
  )
}
