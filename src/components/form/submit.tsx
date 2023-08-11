import React from 'react'

export default function Submit({title}: {title: string}) {
  return (
    <button type="submit" 
    className="bg-zinc-400 p-2 rounded text-white border-2 
    border-zinc-500 hover:bg-zinc-500 transition-all
    dark:bg-zinc-200 dark:text-zinc-600 dark:hover:bg-zinc-50 
    dark:border-zinc-50 w-24">
      {title}
    </button>
  )
}
