import { createContext } from 'react'
// createContext(defaultValue)
// defaultValue可以使用有意義的值，或是null值
const UserContext = createContext(null)
// 另外可選的是使用displayName屬性，這個屬性是用於搭配react devtools瀏覽器擴充套件除錯使用，不使用的話統一使用"Context"名稱
UserContext.displayName = 'UserContext'
// 命名導出(name)export
export { UserContext }
