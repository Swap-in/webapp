import React from 'react'
import './Search.scss'
import Navbar from '../../Components/Navbar/Navbar'
import PageTitle from '../../Components/PageTitle'
import Select from '../../Components/Select'
import SearchResults from '../../Components/SearchResults'

function Search({ title }) {
  return (
    <div className='Search'>
      <Navbar goBackIcon />
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
  )
}

export default Search;
