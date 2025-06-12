'use client'

import { useState } from 'react'

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArrayPage() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample)

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const nextData = [...data, newObj]

          //3
          setData(nextData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 產生不重覆id的方式
          // 1. 使用uuid(或其它能產生亂數雜湊id的函式庫)
          // const newId = self.crypto.randomUUID()
          // 2. 使用時間日期物件(轉字串或整數值)
          // 以下可以使用 `Date.now()` 或 `+new Date()`
          const newId = Number(new Date())
          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          //1 //2
          const nextData = [newObj, ...data]

          //3
          setData(nextData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1 2
          // 由於filter會回傳一個套用過濾條件回調後的新陣列，所以可以用狀態直接呼叫它
          const nextData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          // 3
          setData(nextData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 相當於排除掉文字為b的資料
          // (尋找文字為b的資料)判斷條件回調的顛倒
          const nextData = data.filter((v, i) => {
            return v.text !== 'b'
          })

          // 3
          setData(nextData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 相當於排除掉id為4的資料
          // (尋找id為4的資料)判斷條件回調的顛倒
          const nextData = data.filter((v, i) => {
            return v.id !== 4
          })

          // 3
          setData(nextData)
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1
          const nextData = JSON.parse(JSON.stringify(data))
          // 2
          // 2-1 先找到id為3的索引值為何
          const foundIndex = nextData.findIndex((v) => v.id === 3)

          // 如果有找到的話
          if (foundIndex !== -1) {
            // 2-2 利用索引值更動該物件的text屬性值
            nextData[foundIndex].text = 'cccc'
            // 3
            setData(nextData)
          }

          // 針對剛好是"物件陣列"(第一層陣列，第二層物件)的狀態樣式的語法
        }}
      >
        8-1. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          // 針對剛好是"物件陣列"(第一層陣列，第二層物件)的狀態樣式的語法
          // 呼叫map作陣列展開成員的動作(相當於可以拷貝到第一層)
          const nextData = data.map((v, i) => {
            // 如果找到id為3的成員，則作拷貝物件，並更動text屬性值的動作再返回(相當於拷貝到第二層物件)
            if (v.id === 3) return { ...v, text: 'cccc' }
            // 其它物件直接返回
            else return v
          })

          // 3
          setData(nextData)
        }}
      >
        8-2. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        9. 清空表格
      </button>
    </>
  )
}
