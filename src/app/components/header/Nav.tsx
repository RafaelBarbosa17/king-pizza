import ThemeButton from "./Theme";

const Nav = () => {
    return (
        <nav className="w-full p-4 hidden md:flex flex-col-reverse md:flex-row items-center justify-between ">
            <ul className="flex flex-row gap-4">
                <li className="text-black text-xl font-amiko font-bold uppercase cursor-pointer dark:text-white">Local</li>
                <li className="text-black text-xl font-amiko font-bold uppercase cursor-pointer dark:text-white">Cardápio</li>
                <li className="text-black text-xl font-amiko font-bold uppercase cursor-pointer dark:text-white">Sobre Nós</li>
            </ul>
            <ThemeButton />
        </nav>
    )
}

export default Nav;