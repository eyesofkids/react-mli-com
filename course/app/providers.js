'use client'
// 此檔案是為了專門套嵌context使用的客戶端元件
// 所有應用程式的context都會在此處統一套嵌到應用程式中
// 因layout元件傾向使用伺服器元件(要共享與快取的關係)

import { UserContext } from '@/context/user'

export default function Providers({ children }) {
  return (
    <>
      <UserContext.Provider value={{ name: '張三', email: 'test@test.com' }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
