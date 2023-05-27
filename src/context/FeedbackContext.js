import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context item 1",
      rating: 3,
    },
    {
      id: 2,
      text: "This is from context item 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This is from context item 3",
      rating: 5,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => 
      item.id === id ? {...item, ...updatedItem} : item
    ))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
