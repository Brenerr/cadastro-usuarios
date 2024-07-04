import { EnvelopeSimple, IdentificationCard, PencilSimple, Phone, TrashSimple, UserCircle } from 'phosphor-react';
import { useContext } from 'react';

import { UserProps, UsersContext } from '../../../../contexts/UsersContext';

export function CardUser(user: UserProps) {
  const { removeUserFromList } = useContext(UsersContext)

  return (
    <span className="flex flex-col items-center gap-4 bg-base-card p-5 rounded-md ">
      <span className="flex items-center justify-center gap-2">
        <UserCircle fontSize="1.375rem" />
        <p className="font-bold text-xl text-base-subtitle">{user.name}</p>
      </span>

      <span className="flex items-center justify-center gap-2">
        <IdentificationCard fontSize="1.375rem" />
        <p className="text-center text-sm text-base-label">{user.cpf}</p>
      </span>

      <span className="flex items-center justify-center gap-2">
        <Phone fontSize="1.375rem" />
        <p className="text-center text-sm text-base-label">{user.phone}</p>
      </span>

      <span className="flex items-center justify-center gap-2">
        <EnvelopeSimple fontSize="1.375rem" />
        <p className="text-center text-sm text-base-label">{user.email}</p>
      </span>

      <div className="flex items-center justify-between gap-4">
        <button
          title="Editar usuário"
          className="rounded-md p-2 bg-primary hover:bg-primary-dark transition text-base-card"
        >
          <PencilSimple fontSize="1.375rem" />
        </button>
        <button
          title="Remover usuário"
          className="rounded-md p-2 bg-red-500 hover:bg-red-600 transition text-base-card"
          onClick={() => removeUserFromList(user.cpf)}
        >
          <TrashSimple fontSize="1.375rem" />
        </button>
      </div>
    </span>
  )
}
