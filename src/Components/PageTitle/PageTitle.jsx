import React from 'react'
import './PageTitle.scss'

function PageTitle({ title, className }) {
  return (
    <h2 className={`${className} PageTitle`}>{title}</h2>
  )
}

export default PageTitle
