'use client'

import React from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        <span className={styles.goodStyle}>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
    </>
  )
}
