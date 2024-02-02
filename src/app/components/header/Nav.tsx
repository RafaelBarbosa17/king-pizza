
const Nav = () => {
    return (
        <nav className="w-full p-4 hidden md:flex flex-col-reverse md:flex-row items-center justify-between">
            <ul className="flex flex-row gap-4">
                <li className="font-amiko font-bold uppercase cursor-pointer ">Local</li>
                <li className="font-amiko font-bold uppercase cursor-pointer ">Cardápio</li>
                <li className="font-amiko font-bold uppercase cursor-pointer ">Sobre Nós</li>
            </ul>
        </nav>
    )
}

export default Nav;