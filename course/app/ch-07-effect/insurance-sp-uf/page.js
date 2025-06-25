'use client'

// 連結用
import Link from 'next/link'
// 載入指示動畫
import CssLoader from './_components/css-loader'
// 改用useFetch
import { useFetch } from '@/hooks/use-fetch'

export default function InsurancePage() {
  const { data, loading, error } = useFetch(
    'https://my-json-server.typicode.com/eyesofkids/json-fake-data/insurance'
  )
  // 檢查data資料類型再套用到map裡
  const insurances = Array.isArray(data) ? data : []

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
              <Link href={`./insurance-sp/detail?id=${v.id}`}>
                {v.id}/{v.customer}/{v.type}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
