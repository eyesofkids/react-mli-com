'use client'

import { useState, useEffect } from 'react'
// 連結用
import Link from 'next/link'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance
export default function InsurancePage() {
  // 接收從伺服器來的資料(物件陣列)
  const [insurances, setInsurances] = useState([])

  // 向伺服器獲取資料的函式
  const getData = async () => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance'
    const res = await fetch(url)
    const resData = await res.json()
    console.log(resData)
    // 設定到狀態，觸發重新渲染
    setInsurances(resData)
  }

  // 樣式2
  // 在第一次渲染後執行，要連接伺服器作fetch資料，並設定到狀態的工作
  useEffect(() => {
    // 呼叫async函連接伺服器得到資料
    getData()
  }, [])

  return (
    <>
      <h1>保險單列表頁</h1>
      <hr />
      <ul>
        {insurances.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`./insurance/${v.id}`}>
                {v.id}/{v.customer}/{v.type}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
