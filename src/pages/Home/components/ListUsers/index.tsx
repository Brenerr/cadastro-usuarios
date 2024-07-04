import { useContext } from 'react';

import { UsersContext } from '../../../../contexts/UsersContext';
import { CardUser } from '../CardUser';

export function ListUsers() {
  const { listUsers } = useContext(UsersContext)
  return (
    <>
      {listUsers.length === 0 ? (
        <div className="w-full  flex flex-col items-center justify-center gap-5 mt-20">
          <p className="text-base-text">Nenhum cadastro encontrado!</p>
        </div>
      ) : (
        <div className="grid items-center justify-center gap-x-8 gap-y-10 grid-cols-[repeat(auto-fit,minmax(16rem,_1fr))] ">
          {listUsers.map((user) => {
            return (
              <CardUser
                key={user.cpf}
                name={user.name}
                cpf={user.cpf}
                phone={user.phone}
                email={user.email}
              />
            )
          })}
        </div>
      )}
    </>
  )
}
