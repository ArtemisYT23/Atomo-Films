import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify';

const SearchBar: React.FC = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleSearch = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    const newTimeout = setTimeout(() => {
      onKeyUp(value)
    }, 500)

    setTypingTimeout(newTimeout)
  }

  const onKeyUp = async (query: string) => {
    if (query !== '') {
      query = query.trim()
      navigate(`/search/${slugify(query)}`)
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <div className="w-full h-[4rem] bg-black/90 md:bg-black flex justify-end items-center">
        <input
          type="search"
          name="searchpanel"
          id="searchpanel"
          placeholder="Search Movie"
          className="p-2 w-full mx-5 md:w-[20rem] rounded-xl outline-none"
          onKeyUp={() => handleSearch()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar
