import React from 'react'
import './Search.scss'
import PageTitle from '../../Components/PageTitle'
import Select from '../../Components/Select'
import SearchResults from '../../Components/SearchResults'
import Navbar from '../../Components/Navbar/Navbar'

function Search({ title }) {
  return (
    <>
      <Navbar goBackIcon />
      <div className='Search'>
        <PageTitle title={title} />
        <Select />
        <h3 className='Search--title'>Resultados</h3>
        <div className='SearchContainerResults'>
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
          <SearchResults />
        </div>
      </div>
    </>
  )
}

export default Search;
