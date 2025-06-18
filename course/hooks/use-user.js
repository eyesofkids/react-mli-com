'use client'
// use-user勾子檔案開發的目的:
// 1. 建立context
// 2. 提供context provider中的共享狀態的管理
// 3. 客製化useContext勾子導出
import { useState, createContext, useContext } from 'react'
// createContext(defaultValue)
// defaultValue可以使用有意義的值，或是null值
const UserContext = createContext(null)
// 另外可選的是使用displayName屬性，這個屬性是用於搭配react devtools瀏覽器擴充套件除錯使用，不使用的話統一使用"Context"名稱
UserContext.displayName = 'UserContext'

//提供context provider中的共享狀態的管理
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    name: '',
    email: '',
  })

  // 判斷會員是否在登入狀態
  const isAuth = Boolean(user.id)

  const login = () => {
    setUser({ id: 1, name: '張三', email: 'test@test.com' })
  }

  const logout = () => {
    setUser({
      id: 0,
      name: '',
      email: '',
    })
  }

  return (
    <>
      <UserContext.Provider value={{ isAuth, user, login, logout }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

// 客製化名稱的自訂勾子
export const useUser = () => useContext(UserContext)
