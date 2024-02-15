import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'

interface DataItem {
  id: number
  sabor: string
  ingredients: string
  price: {
    md: number
    lg: number
  }
}

interface SearchBarProps {
  data: DataItem[]
}

const Search: React.FC<SearchBarProps> = ({ data }) => {
  const [query, setQuery] = useState<string>('')
  const [result, setResults] = useState<DataItem[]>([])
  const [focus, setFocus] = useState(false)
  const [activeSearchBar, setActiveSearchBar] = useState(false)

  const queryEmpty = () => {
    if (query != '') {
      setFocus(true)
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setQuery(searchTerm)

    const filteredResults = data.filter(
      (item) =>
        item.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sabor.toLowerCase().includes(searchTerm.toLowerCase())
    )
    queryEmpty()
    setResults(filteredResults)
  }

  return (
    <div className="z-40">
      <form id="search-bar" action="">
        <div
          className={`
              flex items-center justify-between p-2 hover:bg-white
              ${activeSearchBar ? 'absolute right-0 top-0 h-[70px] w-full bg-white px-4 md:relative md:h-full' : 'hover:rounded-full'}
              ${focus ? 'md:rounded-t-3xl' : 'md:rounded-full'}
            `}
          id={activeSearchBar ? 'seach-box-actived' : ''}
        >
          <input
            type="text"
            name="search-pizza"
            id="search-pizza"
            placeholder="Procurar..."
            className={`
              text-black focus:outline-none
              ${activeSearchBar ? 'w-full' : 'w-0'}
            `}
            value={query}
            onChange={handleSearch}
            onFocus={queryEmpty}
            onBlur={() => setFocus(false)}
          />
          <FaSearch
            id="search-icon"
            className={
              'h-[30px] w-[30px] p-[2px] hover:cursor-pointer hover:fill-black hover:stroke-white' +
              (activeSearchBar ? ' hidden' : ' block')
            }
            onClick={() => setActiveSearchBar(true)}
          />
          <RiCloseFill
            className={
              'h-[30px] w-[30px] fill-black hover:cursor-pointer' +
              (activeSearchBar ? ' block' : ' hidden')
            }
            onClick={() => setActiveSearchBar(false)}
          />
        </div>
      </form>
      <div
        className={
          'absolute right-0 top-[50px] w-full bg-white pt-8 md:left-auto md:w-[425px] ' +
          `${focus ? 'block' : 'hidden'}`
        }
      >
        <ul className="flex max-h-[300px] flex-col justify-center overflow-y-scroll">
          {result.map((r, index) => (
            <li key={index} className="max-w-[400px] px-2">
              <a href="">
                <div className="text-base font-bold uppercase text-black">
                  {r.sabor}
                </div>
                <div className="text-sm text-black">{r.ingredients}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search
