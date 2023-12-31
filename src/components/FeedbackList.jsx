import React from 'react'
import FeedbackItems from './FeedbackItems'
import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
      return <p>No Feedback yet</p>
    }
    return (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
         <motion.div 
         key={item.id}
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:0}}
         >
         <FeedbackItems 
          key={item.id} 
          item={item} 
          handleDelete ={handleDelete}/>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    )
 

    // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item)=>(
  //      <FeedbackItems 
  //       key={item.id} 
  //       item={item} 
  //       handleDelete ={handleDelete}/>
  //     ))}
  //   </div>
  // )
}

FeedbackList.prototype={
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
}

export default FeedbackList