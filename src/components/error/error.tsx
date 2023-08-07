import React from 'react'

type ErrorProps = {
  message: string,
}

export default function ErrorMessage(props: ErrorProps) {
  const {message} = props
  return (
    <span className='border-2 p-2 rounded bg-red-300 border-red-400 text-black'>
      {message}
    </span>
  )
}
