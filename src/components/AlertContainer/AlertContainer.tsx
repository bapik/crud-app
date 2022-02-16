import AlertComponent from '../AlertComponent'

interface IErrors {
  field: string,
  message: string,
  type: string,
  index: number
}

type Props = {
  errors: Array<IErrors>
}

export const AlertContainer = ({ errors }: Props) => (
  <div className='position-absolute bottom-0 end-0 mx-4 d-flex flex-column'>
    {errors.map(error => (
      <AlertComponent field={error.field} message={error.message} type={error.type} key={error.field + error.message + error.index} />
    ))}
  </div>
)