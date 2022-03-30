import { v4 as uuidv4 } from 'uuid'
import { useState, createContext } from 'react'
import feedBackData from '../data/feedbackData';

const FeedbackContext = createContext()

// this is a comoponent  save everone need datas
// include data and function
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedBack] = useState(feedBackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const handleDelete = (id) => {
    if(window.confirm('Are you sure yoou want to delete?')) {
      setFeedBack(feedback.filter(item => item.id !== id))
    }
  }
  // add feedback
  const handleAdd = (payload) => {
    payload.id = uuidv4()
    setFeedBack([
      payload,
      ...feedback
    ])
  }
  // edit and update feedback
  const updateFeedback = (id, updItem) => {
    const newFeedback = feedback.map(item => item.id === id ? {...item, ...updItem} : item)
    console.log('@', id, updItem, feedback, newFeedback)
    setFeedBack(newFeedback)
    // 
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  // set item to editing
  const handleEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }


  return (
    <FeedbackContext.Provider value={{
      feedback, 
      feedbackEdit,
      setFeedBack, 
      handleDelete, 
      handleAdd, 
      handleEdit, 
      updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext