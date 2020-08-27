import React from 'react'
import './FeedFooter.scss'
import likeIcon from '../../assets/icons/like.svg'
import superLikeIcon from '../../assets/icons/superlike.svg'
import dislikeIcon from '../../assets/icons/dislike.svg'
import Pellet from '../pellet/Pellet'

function FeedFooter({ openMatchModal }) {

  return (
    <div className='FeedFooter'>
      <div className='FeedFooter--content'>
        <div className='FeedFooter--content__description'>
          <h3>Camisa adidas</h3>
          <Pellet title='Talla' />
          <Pellet title='Tipo' />
          <p>Descripción del producto de no mas de 100 caracteres para evitar descuadres en los estilos y las vistas del feed</p>
        </div>
      </div>
      <div className='FeedFooter--actions'>
        <button
          type='button'
          className='FeedFooter--actions__button'
        >
          <img src={likeIcon} alt='Like' />
        </button>
        <button
          type='button'
          className='FeedFooter--actions__button'
          onClick={() => openMatchModal()}
        >
          <img src={superLikeIcon} alt='Super Like' />
        </button>
        <button
          type='button'
          className='FeedFooter--actions__button'
        >
          <img src={dislikeIcon} alt='Dislike' />
        </button>
      </div>
    </div>
  )
}

export default FeedFooter
