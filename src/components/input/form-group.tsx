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

  // let input = <Input type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
  // if (type === 'textarea') {
  //   input = <textarea value={value} onChange={(e) => setValue(e.target.value)}></textarea>
  // }
  return (
    <label className='flex flex-col items-center'>
      <span>{title}</span>
      <Input type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
      {/* {input} */}
    </label>
  )
}
