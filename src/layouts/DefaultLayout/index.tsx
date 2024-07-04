import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="my-0 mx-auto flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
