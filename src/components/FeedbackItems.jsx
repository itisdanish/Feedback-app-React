import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedBackItems({item, handleDelete}) {
  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItems.prototype={
  item: PropTypes.object.isRequired
}

export default FeedBackItems