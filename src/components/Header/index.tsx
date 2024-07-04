import { ArrowLeft } from 'phosphor-react';
import { NavLink, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation()

  return (
    <header className="flex justify-center sticky top-0 py-8 bg-zinc-50">
      <div className="container flex items-center">
        {location.pathname === '/' ? (
          <NavLink
            to="/cadastrar"
            className="rounded-md p-2 bg-primary text-white relative ml-auto"
          >
            Cadastrar
          </NavLink>
        ) : (
          <NavLink
            to="/"
            className="rounded-md p-2 flex items-center justify-center gap-2 relative"
          >
            <ArrowLeft fontSize="1.375rem" />
            Voltar
          </NavLink>
        )}
      </div>
    </header>
  )
}
