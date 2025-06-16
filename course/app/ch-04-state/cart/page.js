'use client'

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCartPage() {
  const [products, setProducts] = useState(initialProducts)

  // 遞增使用的處理函式
  const handleIncrease = (productId) => {
    // 1 2
    const nextProducts = products.map((product) => {
      // 如果找到id為productId的成員，則作count屬性遞增
      if (product.id === productId)
        return { ...product, count: product.count + 1 }
      // 其它物件直接返回
      else return product
    })

    // 3
    setProducts(nextProducts)
  }
  // 遞減使用的處理函式
  const handleDecrease = (productId) => {
    // 1 2
    const nextProducts = products.map((product) => {
      // 如果找到id為productId的成員，則作count屬性遞減
      if (product.id === productId)
        return { ...product, count: product.count - 1 }
      // 其它物件直接返回
      else return product
    })

    // 3
    setProducts(nextProducts)
  }
  // 處理刪除
  const handleRemove = (productId) => {
    const nextProducts = products.filter((product) => {
      return product.id !== productId
    })

    // 3
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 先計算出接下來要變動的數量值
              const nextCount = product.count - 1

              if (nextCount <= 0) {
                // 作刪除的動作
                if (confirm('確定要刪除此商品?')) {
                  handleRemove(product.id)
                }
              } else {
                // 作遞減的動作
                handleDecrease(product.id)
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
