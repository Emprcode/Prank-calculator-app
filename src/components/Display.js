import React from 'react'

export const Display = ({string}) => {
  return (
    <div className="display">{string || "0.00"}</div>
  )
}
