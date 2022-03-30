import { useState,useContext, useEffect } from 'react'
import FeedbackContext from '../contexts/feedbackContext'

function FeedbackRating({handleSelected}) {
  const {feedbackEdit} = useContext(FeedbackContext)
  const [selected, setSelected] = useState(10)

  // when edit mode is active,change the rating value by edit target id
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => {
    const targetValue = +e.target.closest('input').value
    
    setSelected(targetValue)
    handleSelected(targetValue)
  }
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedbackRating
