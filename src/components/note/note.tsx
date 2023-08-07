import format from "date-fns/format"

type NoteProps = {
  title: string,
  content: string,
  created: string,
  updated: string,
}

export default function Note(props: NoteProps) {
  const {title, content, created, updated} = props
  return (
    <div className="flex w-96 max-[400px]:w-80 min-w-325 justify-between border-2 border-zinc-600 p-2 shadow-lg hover:cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1">
      <div>
        <h3 className=" text-zinc-600">{title}</h3>
        <p className="text-zinc-400">{content}</p>
      </div>
      <div>
        <span className="block text-xs text-zinc-600">created at</span>
        <span className="block text-xs text-zinc-400">{format(new Date(created), 'MMM d HH:mm')}</span>
        <span className="block text-xs text-zinc-600">updated at</span>
        <span className="block text-xs text-zinc-400">{format(new Date(updated), 'MMM d HH:mm')}</span>
      </div>
    </div>
  )
}
