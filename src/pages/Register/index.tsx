import { zodResolver } from '@hookform/resolvers/zod';
import { CircleNotch } from 'phosphor-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

import { UsersContext } from '../../contexts/UsersContext';

const newFormValidationSchema = zod.object({
  name: zod.string().min(3, 'Campo deve conter 3 caracteres ou mais'),
  cpf: zod.string().min(1, 'Informe a CPF'),
  phone: zod.string().min(1, 'Informe o telefone'),
  email: zod.string().min(1, 'Informe o e-mail'),
})

type NewFormData = zod.infer<typeof newFormValidationSchema>

export function Register() {
  const { addUserToList } = useContext(UsersContext)

  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
  })

  const {
    handleSubmit,
    formState,
    register,
    formState: { errors },
  } = newForm
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitForm = async (data: NewFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await addUserToList(data)
    setIsSubmitting(false)
  }

  return (
    <section className="container flex flex-col items-center justify-center gap-8 p-8 pb-32">
      <h2 className="text-2xl font-extrabold text-base-subtitle md:text-3xl">
        Novo cadastro
      </h2>
      {formState.isSubmitSuccessful ? (
        <div className="w-full  flex flex-col items-center justify-center gap-5 mt-20">
          <p className="text-base-text">Usuário cadastrado com sucesso!</p>
          <button
            type="button"
            onClick={() => newForm.reset()}
            className="mt-8 font-medium text-lg text-white px-8 py-2 rounded-full bg-primary hover:opacity-70 disabled:text-disabled-text not disabled:bg-disabled-background transition cursor-pointer disabled:hover:opacity-100"
          >
            Continuar
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col gap-4 min-w-96"
          onSubmit={handleSubmit(handleSubmitForm)}
          action=""
        >
          <div className="flex flex-col">
            <label htmlFor="name">
              Nome completo
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </label>
            <input
              type="text"
              required
              id="name"
              placeholder="Nome Sobrenome"
              {...register('name')}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">
              E-mail
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
            <input
              type="email"
              required
              id="email"
              placeholder="email@dominio.com"
              {...register('email')}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpf">
              CPF
              {errors.cpf && (
                <span className="text-red-500">{errors.cpf.message}</span>
              )}
            </label>
            <input
              type="text"
              required
              id="cpf"
              placeholder="123.123.123-12"
              {...register('cpf')}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone">
              Telefone
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </label>
            <input
              type="text"
              required
              id="phone"
              placeholder="(99) 99999-9999"
              {...register('phone')}
            />
          </div>

          <button
            type="submit"
            disabled={!formState.isValid}
            className={`mt-8 min-h-12 font-medium text-lg text-white p-2 rounded-full bg-primary hover:opacity-70 disabled:text-disabled-text not disabled:bg-disabled-background transition disabled:hover:opacity-100 ${
              isSubmitting && 'pointer-events-none'
            }`}
          >
            {isSubmitting ? (
              <CircleNotch
                className="m-auto animate-spin"
                fontSize="1.375rem"
              />
            ) : (
              'Cadastrar'
            )}
          </button>
        </form>
      )}
    </section>
  )
}
