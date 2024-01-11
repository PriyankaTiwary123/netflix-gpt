import React from 'react'
import { BG_URL } from '../utils/constants'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const Search = () => {
    const langKey = useSelector((store)=> store.appConfig.selectedLang);
    console.log(langKey);
  return (
    <div className ='pt-[5%] flex justify-center '>
         <div className="absolute -z-10">
        <img
        className="w-screen h-[100vh] aspect-auto"
          src={BG_URL}
          alt="netflix_bg"
        />
      </div>
        <form className='w-1/2 bg-black grid grid-cols-12' >
            <input type ='text' className='p-4 m-4 col-span-9' placeholder ={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default Search