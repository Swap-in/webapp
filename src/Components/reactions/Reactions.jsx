import React from 'react'

function Reactions({ className, onClick, image, id }) {
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      id={id}
    >
      <img src={image} alt='Like' id={id} />
    </button>
  )
}

export default Reactions
