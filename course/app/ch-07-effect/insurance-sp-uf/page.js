'use client'

// 連結用
import Link from 'next/link'
// 載入指示動畫
import CssLoader from './_components/css-loader'
// 改用useFetch
import { useFetch } from '@/hooks/use-fetch'

export default function InsurancePage() {
  // 使用自訂勾子作fetch的get(裡面有useState/useEffect)
  const { data, loading, error } = useFetch(
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance'
  )
  // 檢查data資料類型是需要的，再套用到要使用的狀態裡
  const insurances = Array.isArray(data) ? data : []

  // 載入資料時呈現載入指示動畫
  if (loading) {
    return (
      <>
        <h1>保險單列表頁(SearchParams+useFetch)</h1>
        <hr />
        <CssLoader />
      </>
    )
  }

  return (
    <>
      <h1>保險單列表頁(SearchParams+useFetch)</h1>
      <hr />
      <ul>
        {insurances?.map((v) => {
          return (
            <li key={v.id}>
              <Link href={`./insurance-sp-uf/detail?id=${v.id}`}>
                {v.id}/{v.customer}/{v.type}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
