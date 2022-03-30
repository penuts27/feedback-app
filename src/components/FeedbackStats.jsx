import {useMemo, useContext} from 'react'
import FeedbackContext from '../contexts/feedbackContext'
function FeedbackStats() {
  const {feedback, setFeedBack} = useContext(FeedbackContext)

  const avarage = useMemo(() => {
    let result = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
    // 正規表達式，若整數則不用小數點
    result = result.toFixed(1).replace(/[,.]0$/, '')
    return result
  }, [feedback])
  
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  )
}

export default FeedbackStats
