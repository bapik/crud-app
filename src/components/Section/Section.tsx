import { Outlet } from 'react-router-dom'

export const Section = () => (
  <section>
    <div className='container'>
      <Outlet />
    </div>
  </section>
)