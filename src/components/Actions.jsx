import React from 'react'

function Action({tweet}) {
  return (
    <div className='actions'>
  <i className='far fa-comment'></i>
  <i className='fas fa-retweet'></i>
  <i className='far fa-heart'></i>
  <i className='fas fa-share'></i>
</div>
  )
}

export default Action