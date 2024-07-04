import { produce } from 'immer';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface UserProps {
  name: string
  cpf: string
  phone: string
  email: string
}

interface UsersContextType {
  listUsers: UserProps[]
  setListUsers: (listUsers: UserProps[]) => void
  addUserToList: (user: UserProps) => void
  removeUserFromList: (userId: string) => void
}

export const UsersContext = createContext({} as UsersContextType)

interface UsersContextProviderProps {
  children: ReactNode
}

export function UsersContextProvider({ children }: UsersContextProviderProps) {
  const [listUsers, setListUsers] = useState<UserProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@list-users-1.0.0')

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return [
      {
        name: 'Joao da Silva',
        cpf: '26899337649',
        phone: '4233335555',
        email: 'joao@joaosilva.com.br',
      },
      {
        name: 'Maria Antonieta',
        cpf: '65138896180',
        phone: '1255553333',
        email: 'maria@mariaantonieta.com.br',
      },
      {
        name: 'Luiz Souza',
        cpf: '32420496329',
        phone: '1144446666',
        email: 'luiz@luizsouza.com.br',
      },
    ]
  })

  function addUserToList(user: UserProps) {
    const userAlreadyExists = listUsers.findIndex(
      (item) => item.cpf === user.cpf
    )

    const newList = produce(listUsers, (draft) => {
      if (userAlreadyExists < 0) {
        draft.push(user)
      }
    })

    setListUsers(newList)
  }

  function removeUserFromList(cpf: string) {
    const newListUsers = listUsers.filter((user) => user.cpf !== cpf)

    setListUsers(newListUsers)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(listUsers)

    localStorage.setItem('@list-users-1.0.0', stateJSON)
  }, [listUsers])

  return (
    <UsersContext.Provider
      value={{
        listUsers,
        setListUsers,
        addUserToList,
        removeUserFromList,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
