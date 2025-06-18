'use client'
// use-user勾子檔案開發的目的:
// 1. 建立context
// 2. 提供context provider中的共享狀態的管理
// 3. 客製化useContext勾子導出
import { useState, createContext, useContext } from 'react'

/**
 * @typedef {Object} User
 * @property {number} id - 使用者 ID
 * @property {string} name - 使用者名稱
 * @property {string} email - 使用者 Email
 */

/**
 * @typedef {Object} UserContextValue
 * @property {boolean} isAuth - 是否已登入
 * @property {User} user - 使用者資訊
 * @property {function():void} login - 登入函式
 * @property {function():void} logout - 登出函式
 */

// createContext(defaultValue)
// defaultValue可以使用有意義的值，或是null值
/** @type {import('react').Context<UserContextValue|null>} */
const UserContext = createContext(null)
// 另外可選的是使用displayName屬性，這個屬性是用於搭配react devtools瀏覽器擴充套件除錯使用，不使用的話統一使用"Context"名稱
UserContext.displayName = 'UserContext'

/**
 * 提供 context provider 中的共享狀態管理
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
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

/**
 * 客製化名稱的自訂勾子，取得 UserContext
 * @returns {UserContextValue}
 */
export const useUser = () => useContext(UserContext)
