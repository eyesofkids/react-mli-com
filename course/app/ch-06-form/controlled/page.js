'use client'

import MyInput from './_components/my-input'
import MyTextarea from './_components/my-textarea'
import MySelect from './_components/my-select'
import MyRadioButtons from './_components/my-radio-buttons'

export default function ControlledPage() {
  return (
    <>
      <h1>可控(受控)表單元件</h1>
      <hr />
      <MyRadioButtons />
      {/* <MySelect /> */}
      {/* <MyTextarea /> */}
      {/* <MyInput /> */}
    </>
  )
}
