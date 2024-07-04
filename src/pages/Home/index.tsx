import { ListUsers } from './components/ListUsers';

export function Home() {
  return (
    <section className="container flex flex-col gap-8 p-8 pb-32">
      <h2 className="text-2xl text-center font-extrabold text-base-subtitle md:text-3xl">
        Cadastros
      </h2>
      <ListUsers />
    </section>
  )
}
