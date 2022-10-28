import React from 'react'

export const Display = ({string, isPrank}) => {
const cls = isPrank? "display prank" : "display";
  return (
    <div className={cls}>{string || "0.00"}</div>
  )
}
