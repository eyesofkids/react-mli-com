'use client'

import styles from './css-loader.module.css'

// 來自: https://css-loaders.com/spinner/
export default function CssLoader() {
  return (
    <>
      <div className={styles['loader']}></div>
    </>
  )
}
