import React, { useRef, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { BsCheck2All } from 'react-icons/bs';

const CopyToClipBoard: React.FC<{ text: string }> = ({ text }) => {

    const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    console.log('Texto copiado para a área de transferência!');
    setCopied(true);
    setTimeout(() => {setCopied(false)}, 3000)
  };

  return (
    <div className="bg-white rounded-md text-black md:text-left text-center font-inter text-md flex flex-row justify-center items-center w-max">
      <p className="p-2  border-r-black border-r-[0.5px]">
        Praça João Pereira, 80B - Centro, <br /> Capela Nova - MG, 36290-000
      </p>
      <button
        className="w-auto min-w-[50px] h-full flex flex-col items-center justify-center"
        onClick={handleCopy}
      >
        {
            !copied ? 
            <IoCopyOutline className="w-[30px] h-[30px]" />
            :
            <BsCheck2All className='w-[30px] h-[30px] fill-tealGreen' />
        }
        <legend className={ "text-[10px] font-bold " + (!copied ? 'text-black' : 'text-tealGreen') }> {!copied ? 'Copiar' : 'Copiado'} </legend>
      </button>
    </div>
  );
};

export default CopyToClipBoard;
