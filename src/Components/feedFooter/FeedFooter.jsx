import React, { useContext } from 'react'
import './FeedFooter.scss'
import likeIcon from '../../assets/icons/like.svg'
import superLikeIcon from '../../assets/icons/superlike.svg'
import dislikeIcon from '../../assets/icons/dislike.svg'
import Pellet from '../pellet/Pellet'
import Reactions from '../reactions/Reactions'
import addLike from '../../services/addLike'
import UserContext from '../../context'

function FeedFooter({ clothesData, setOpenModal }) {
  const { token, user } = useContext(UserContext)
  const handleReactions = (e) => {
    const typeOfLike = e.target.id
    const sendData = {
      token,
      id: user.id,
      clotheId: clothesData.id,
      typeLike: typeOfLike,
    }
    addLike(sendData)
      .then((data) => {
        setOpenModal(data[0].match)
      })
  }

  return (
    <div className='FeedFooter'>
      <div className='FeedFooter--content'>
        <div className='FeedFooter--content__description'>
          <h3>{clothesData.title}</h3>
          <Pellet title={`Tipo ${clothesData.category_id}`} />
          <Pellet title={clothesData.gender} />
          <Pellet title={clothesData.brand} />
          <p>{clothesData.description}</p>
        </div>
      </div>
      <div className='FeedFooter--actions'>
        <Reactions
          className='FeedFooter--actions__button'
          onClick={handleReactions}
          image={likeIcon}
          id='LIKE'
        />
        <Reactions
          className='FeedFooter--actions__button'
          onClick={handleReactions}
          image={superLikeIcon}
          id='SUPERLIKE'
        />
        <Reactions
          className='FeedFooter--actions__button'
          onClick={handleReactions}
          image={dislikeIcon}
          id='DISLIKE'
        />
      </div>
    </div>
  )
}

export default FeedFooter
