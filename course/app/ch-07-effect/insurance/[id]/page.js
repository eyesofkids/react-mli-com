'use client'

import { useState, useEffect } from 'react'
// 使用next提供的獲取動態路由參數的勾子
import { useParams } from 'next/navigation'

import Link from 'next/link'

// 動態路由參數
export default function IdPage() {
  const params = useParams()
  console.log(params)
  // id是資料夾的名稱[id]轉變為物件屬性
  // 會得到 `{id: xxxx}` 物件
  const id = params.id

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
      <h1>保險單詳細頁</h1>
      <Link href="./">回列表</Link>
      <hr />
      <p>編號: {insurance.id}</p>
      <p>客戶: {insurance.customer}</p>
      <p>類型: {insurance.type}</p>
      <p>日期: {insurance.date}</p>
    </>
  )
}
