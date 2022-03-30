import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from '../components/RatingSelect'
import { useState,useContext, useEffect } from 'react'
import FeedbackContext from '../contexts/feedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const {handleAdd, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit){
      // when start edit mode,btn is active
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length <= 0) return
    const newFeedBack = {
      text,
      rating
    }
    if(feedbackEdit.edit){
      updateFeedback(feedbackEdit.item.id, newFeedBack)
    }else {
      handleAdd(newFeedBack)
    }
    setText('')
  }
  const handleTextType = (e) => {
    if(text === ''){
      setMessage(null)
      setBtnDisabled(true)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }else{ 
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect handleSelected={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input type="text" placeholder='Write a review' onChange={handleTextType} value={text}/>
          <Button type="submit" isDisable={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
