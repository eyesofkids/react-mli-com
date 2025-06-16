'use client'

import { useState } from 'react'
// 使用immer
import { produce } from 'immer'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
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

  // 總數量&總價
  // 使用reduce(累加/歸納)迭代方法
  // 這種變數值稱為衍生(派生)狀態(derived state)，意即是狀態的一部份，或是由狀態再計算得來的值
  const totalQty = products.reduce((acc, product) => acc + product.count, 0)
  const totalAmount = products.reduce(
    (acc, product) => acc + product.count * product.price,
    0
  )

  return (
    <>
      <h1>購物車(immer)</h1>
      <hr />
      <ul>
        {products.map((product, i) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                //  在immer中的draft(草稿狀態)，是用proxy產生的複本狀態，其中可以直接修改
                const nextProducts = produce(products, (draft) => {
                  draft[i].count++
                })

                setProducts(nextProducts)
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
                    //  在immer中的draft(草稿狀態)，是用proxy產生的複本狀態，其中可以直接修改
                    const nextProducts = produce(products, (draft) => {
                      draft.splice(i, 1)
                    })

                    setProducts(nextProducts)
                  }
                } else {
                  //  在immer中的draft(草稿狀態)，是用proxy產生的複本狀態，其中可以直接修改
                  const nextProducts = produce(products, (draft) => {
                    draft[i].count--
                  })

                  setProducts(nextProducts)
                }
              }}
            >
              –
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p>
        總數量: {totalQty} / 總價: NT${totalAmount.toLocaleString()}
      </p>
    </>
  )
}
