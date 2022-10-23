import React from 'react'

export const Button = ({lable, cls, handleOnClick}) => {
    // cont cls = "btn-ac"
    // const label = "AC"
  return (
    <div  className={"btn" + cls } onClick = {() => handleOnClick(lable)} >{lable} </div>
  )
}
