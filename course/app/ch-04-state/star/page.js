'use client'

import { useState } from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  // 目前的評分記錄，一開始為0代表未點按
  const [rating, setRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <hr />
      <div>
        {/* 快速建立一個包含1...N數字陣列的表達式語法 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星按鈕的分數(索引+1)
            const score = i + 1

            return (
              <button
                key={i}
                onClick={() => {
                  // 設定評分
                  setRating(score)
                }}
                className={styles.starBtn}
              >
                <span className={score <= rating ? styles.on : styles.off}>
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      <p>目前點按: {rating} 分</p>
    </>
  )
}
