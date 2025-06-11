'use client'

export default function JsxRenderPage() {
  return (
    <>
      <h1>JSX中對JS表達式/值渲染(render)呈現範例</h1>
      <hr />
      <h2>number(數字)</h2>
      {1.0}
      {1 - 1}
      {NaN}
      <h2>string(字串)</h2>
      我是字串
      {'我是字串'}
      {`我是字串`}
      {`總計:${100 - 1}`}
      <h2>boolean(布林)</h2>
      {/* 不渲染呈現 */}
      {true}
      {false}
      <h2>null/undefined</h2>
      {/* 不渲染呈現 */}
      {null}
      {undefined}
      <h2>array(陣列)</h2>
      {[1, 2, 3]}
      {['hello', 'a', 'b']}
      {[<p key="1">x</p>, <p key="2">y</p>]}
      <h2>object(物件)</h2>
      {/* 造成執行錯誤，無法渲染 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>function(函式)</h2>
      {/* 警告/執行錯誤，無法渲染 */}
      {/* {() => {}} */}
    </>
  )
}
