import React from 'react'
import Search from '../../components/Search'
import GptMovieSuggestions from './gptMovieSuggestions'


const GptSearchBar = () => {
  return (
    <div>
      <Search/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchBar