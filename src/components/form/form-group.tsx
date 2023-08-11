import React from 'react'
import { Input } from '.';

type FormGroupProps = {
  title: string,
  type: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

export default function FormGroup(props: FormGroupProps) {
  const {title, type, value, setValue} = props;

  return (
    <label className='flex flex-col items-center'>
      <span className='dark:text-zinc-200'>{title}</span>
      <Input type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
    </label>
  )
}
