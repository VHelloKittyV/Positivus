import React from 'react'

export default function Input({className, props, type, placeholder}) {
  return (
    <input type={type} className={className} {...props} placeholder={placeholder}/>
  )
}
