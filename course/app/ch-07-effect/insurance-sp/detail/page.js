'use client'

import { useState, useEffect } from 'react'
// 使用next提供的獲取搜尋參數的勾子
import { useSearchParams } from 'next/navigation'

import Link from 'next/link'

// 動態路由參數
export default function DetailPage() {
  const sp = useSearchParams()
  console.log(sp)
  // id是網址上的搜尋參數(查詢字串)，例如 `?id=CL-2023-001`
  const id = sp.get('id')

  // 接收從伺服器來的資料(物件陣列)
  const [insurance, setInsurance] = useState({
    id: '',
    customer: '',
    type: '',
    date: '',
    amount: 0,
    status: '',
  })

  // 向伺服器獲取資料的函式
  const getData = async (id) => {
    const url = `https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance/${id}`
    const res = await fetch(url)
    const resData = await res.json()
    console.log(resData)
    // 設定到狀態，觸發重新渲染
    setInsurance(resData)
  }

  // 樣式2
  // 在第一次渲染後執行，要連接伺服器作fetch資料，並設定到狀態的工作
  useEffect(() => {
    // 呼叫async函連接伺服器得到資料
    getData(id)
  }, [])

  return (
    <>
      <h1>保險單詳細頁(SearchParams)</h1>
      <Link href="./">回列表</Link>
      <hr />
      <p>編號: {insurance.id}</p>
      <p>客戶: {insurance.customer}</p>
      <p>類型: {insurance.type}</p>
      <p>日期: {insurance.date}</p>
    </>
  )
}
