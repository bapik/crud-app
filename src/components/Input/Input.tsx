type Props = {
  name: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ name, value = '', onChange }: Props) => (
  <input name={name} className='form-control' type='text' value={value} onChange={onChange} />
)