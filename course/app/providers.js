'use client'
// 此檔案是為了專門套嵌context使用的客戶端元件
// 所有應用程式的context都會在此處統一套嵌到應用程式中
// 因layout元件傾向使用伺服器元件(要共享與快取的關係)

// 會員相關的context
import { UserProvider } from '@/hooks/use-user'

export default function Providers({ children }) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  )
}
