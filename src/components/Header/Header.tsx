import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='bg-dark mb-3'>
      <div className='container'>
        <nav>
          <ul className='list-unstyled d-inline-flex gap-5 mt-3'>
            <li><Link to='/products' className='text-decoration-none text-white'>Products</Link></li>
            <li><Link to='/categories' className='text-decoration-none text-white'>Categories</Link></li>
            <li><Link to='/add' className='text-decoration-none text-white'>Add</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}