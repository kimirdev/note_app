type InputProps = {
  type: string,
  value: string,
  onChange: React.ChangeEventHandler,
}

export default function Input(props: InputProps) {
  const {type, value, onChange} = props

  const className = 'block border-2 rounded border-zinc-500 p-1 focus:outline-none focus:border-zinc-900'

  let input = <input type={type} spellCheck={false} value={value} onChange={onChange} className={className} />
  if (type === 'textarea') {
    input = <textarea value={value} onChange={onChange} className='block border-2 rounded border-zinc-500 p-1 focus:outline-none focus:border-zinc-900 w-80' rows={10} ></textarea>
  }

  return (
    <>{input}</>
    // <input type={type} className='border-2 rounded border-zinc-500 p-1 focus:outline-none focus:border-zinc-900' spellCheck={false} value={value} onChange={onChange} />
  )
}