import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor="name">Nome completo [sem abreviações]</label>
      <input {...props} />
    </div>
  )
}
