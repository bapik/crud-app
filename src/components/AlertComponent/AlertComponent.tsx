type Props = {
  field: string,
  message: string,
  type: string
}

export const AlertComponent = ({ field, message, type }: Props) => {
  const alertType = type === 'success' ? 'alert-success' : 'alert-danger'

  return <div className={`alert ${alertType}`} role='alert'>{field}: {message}</div>
}