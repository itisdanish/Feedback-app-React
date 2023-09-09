import React from 'react'
import FeedbackItems from './FeedbackItems'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
      return <p>No Feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
       <FeedbackItems 
        key={item.id} 
        item={item} 
        handleDelete ={handleDelete}/>
      ))}
    </div>
  )
}

FeedbackList.prototype={
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
}

export default FeedbackList