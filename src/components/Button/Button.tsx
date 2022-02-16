type Props = {
  label: string
}

export const Button = ({ label }: Props) => <button type='submit' className='btn btn-primary'>{label}</button> 