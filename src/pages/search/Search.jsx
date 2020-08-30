import React, { useState, useContext, useEffect } from 'react'
import './Search.scss'
import PageTitle from '../../Components/PageTitle'
import Select from '../../Components/Select'
import SearchResults from '../../Components/SearchResults'
import Navbar from '../../Components/Navbar/Navbar'
import UserContext from '../../context'
import filterClothes from '../../services/filterClothes'
import Loader from '../../Components/loader'

function Search() {
  const { token, user } = useContext(UserContext)
  const [option, setOption] = useState(1)
  const [clothes, setClothes] = useState(null)
  console.log(option)

  useEffect(() => {
    filterClothes(token, option, user.id)
      .then((data) => setClothes(data))
  }, [token, user, option])

  useEffect(() => {
    console.log(clothes)
  }, [clothes])

  return (
    <>
      <Navbar goBackIcon />
      <div className='Search'>
        <PageTitle title='Buscar' />
        <Select setOption={setOption} />
        <h3 className='Search--title'>Resultados</h3>
        <div className='SearchContainerResults'>
          {clothes ? clothes.map((result) => (
            <SearchResults key={result.id} clothesData={result} />
          )) : <Loader className='Search--loader' />}
          <SearchResults />
        </div>
      </div>
    </>
  )
}

export default Search;
