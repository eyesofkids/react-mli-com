'use client'

// 使用next提供的獲取搜尋參數的勾子
import { useSearchParams } from 'next/navigation'
// 連結用
import Link from 'next/link'
// 載入指示動畫
import CssLoader from '../_components/css-loader'
// 改用useFetch
import { useFetch } from '@/hooks/use-fetch'

// 動態路由參數
export default function DetailPage() {
  const sp = useSearchParams()
  // id是網址上的搜尋參數(查詢字串)，例如 `?id=CL-2023-001`
  const id = sp.get('id')
  // 使用自訂勾子作fetch的get(裡面有useState/useEffect)
  const { data, loading, error } = useFetch(
    `https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance/${id}`
  )
  // 檢查data資料類型是需要的，再套用到要使用的狀態裡
  const insurance = data?.id
    ? data
    : {
        id: '',
        customer: '',
        type: '',
        date: '',
        amount: 0,
        status: '',
      }

  // 載入資料時呈現載入指示動畫
  if (loading) {
    return (
      <>
        <h1>保險單詳細頁(SearchParams+useFetch)</h1>
        <Link href="./">回列表</Link>
        <hr />
        <CssLoader />
      </>
    )
  }

  return (
    <>
      <h1>保險單詳細頁(SearchParams+useFetch)</h1>
      <Link href="./">回列表</Link>
      <hr />
      <p>編號: {insurance.id}</p>
      <p>客戶: {insurance.customer}</p>
      <p>類型: {insurance.type}</p>
      <p>日期: {insurance.date}</p>
    </>
  )
}
