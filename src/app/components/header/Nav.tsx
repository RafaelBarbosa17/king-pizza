const Nav = () => {
  return (
    <nav className="hidden w-full flex-col-reverse items-center justify-between p-4 md:flex md:flex-row">
      <ul className="flex flex-row gap-4">
        <li className="cursor-pointer font-amiko font-bold uppercase ">
          Local
        </li>
        <li className="cursor-pointer font-amiko font-bold uppercase ">
          Cardápio
        </li>
        <li className="cursor-pointer font-amiko font-bold uppercase ">
          Sobre Nós
        </li>
      </ul>
    </nav>
  )
}

export default Nav
