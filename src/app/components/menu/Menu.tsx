
import MenuItems from './MenuItems';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Menu = () => {
  return (
    <section
      id="menu"
      className="w-full h-auto p-4 flex flex-col justify-start items-center"
    >
      <div className="md:w-3/5 w-full flex flex-col items-center">
        <h1 className="font-amiko font-bold uppercase text-redMain text-center">
          Cardápio
        </h1>
        <MenuItems />
      </div>
      <button className='bg-redMain p-2 rounded mt-4 hover:bg-[#bb2a2a]'>Ver mais...</button>
    </section>
  );
};

export default Menu;
