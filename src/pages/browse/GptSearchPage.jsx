import React from 'react'
import { BG_URL } from '../../utils/constants'
import Search from '../../components/Search'
import GptMovieSuggestions from './GptMovieSuggestions'


const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <Search />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearchPage