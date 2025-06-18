'use client'

import MyInputId from './_components/my-input-id'
import MyInputRef from './_components/my-input-ref'

export default function UncontrolledPage() {
  return (
    <>
      <h1>不可控表單元件(uncontrolled)</h1>
      <hr />
      <MyInputRef />
      <MyInputRef />
      <MyInputRef />
      {/* <MyInputId /> */}
    </>
  )
}
