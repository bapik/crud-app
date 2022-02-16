import { Link } from 'react-router-dom'

type Props = {
  id: number,
  index: number,
  children: React.ReactNode
}

export const ListItem = ({ id, index, children }: Props) => {
  const bgColor = index % 2 === 0 ? 'bg-light' : ''

  return (
    <li className={`p-2 ${bgColor} hover`}>
      <Link to={`${id}`} className='row text-decoration-none text-black'>
        {children}
      </Link>
    </li>
  )
}