import React, { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import { BsCheck2All } from 'react-icons/bs'

const CopyToClipBoard: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    console.log('Texto copiado para a área de transferência!')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="flex w-max flex-row items-center justify-center rounded-md bg-white text-center font-inter text-black md:text-left">
      <p className="w-[340px] break-words border-r-[0.5px] border-r-black p-2">
        Praça João Pereira, 80B - Centro, Capela Nova - MG, 36290-000
      </p>
      <button
        className="flex h-full w-auto min-w-[50px] flex-col items-center justify-center"
        onClick={handleCopy}
      >
        {!copied ? (
          <IoCopyOutline className="h-[30px] w-[30px]" />
        ) : (
          <BsCheck2All className="h-[30px] w-[30px] fill-tealGreen" />
        )}
        <legend
          className={
            'text-[10px] font-bold ' +
            (!copied ? 'text-black' : 'text-tealGreen')
          }
        >
          {' '}
          {!copied ? 'Copiar' : 'Copiado'}{' '}
        </legend>
      </button>
    </div>
  )
}

export default CopyToClipBoard
