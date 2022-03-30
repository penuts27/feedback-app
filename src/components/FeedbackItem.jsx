import PropTypes from 'prop-types'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../contexts/feedbackContext'

// import { useState } from 'react'

function FeedBackItem({item}) {
  const {handleDelete, handleEdit} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple"/>
      </button>
      <button className="edit" onClick={() => {handleEdit(item)}}>
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedBackItem
