import format from "date-fns/format"
import { Link } from "react-router-dom"

type NoteProps = {
  title: string,
  content: string,
  created: string,
  updated: string,
  pk: number,
}

export default function Note(props: NoteProps) {
  const {title, content, created, updated, pk} = props
  return (
    <Link to={`/notes/${pk}/`}>
      <div className="flex w-96 max-[400px]:w-80 min-w-325 rounded justify-between border-2 
      border-zinc-600 p-2 shadow-lg hover:cursor-pointer transition-all hover:shadow-2xl dark:shadow-zinc-800
      hover:-translate-y-1 dark:border-zinc-200">
        <div>
          <h3 className=" text-zinc-600 dark:text-zinc-200 max-w-[200px] truncate">{title}</h3>
          <p className="text-zinc-400 max-w-[200px] truncate">{content}</p>
        </div>
        <div className=" w-24">
          <span className="block text-xs text-zinc-600 dark:text-zinc-200">created at</span>
          <span className="block text-xs text-zinc-400">{format(new Date(created), 'MMM d HH:mm')}</span>
          <span className="block text-xs text-zinc-600 dark:text-zinc-200">updated at</span>
          <span className="block text-xs text-zinc-400">{format(new Date(updated), 'MMM d HH:mm')}</span>
        </div>
      </div>
    </Link>
  )
}
