import React, { useRef } from 'react';

function Example8(){
  const inputEl = useRef(null)

  return(
    <>
      {/* 保存input的ref到inputEl */}
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>在 input 上展示文字</button>
    </>
  )
}