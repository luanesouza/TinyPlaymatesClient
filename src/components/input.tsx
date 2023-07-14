import { ChangeEvent, memo, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    value?: string;
    type: 'text' | 'password' | 'file';
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <>
      <label htmlFor={props.name}/>
      <input
        {...props}
      />
    </>
  );
}

const MemoizedInput = memo(Input);

export default MemoizedInput;