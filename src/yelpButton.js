import React from 'react'

export default React.createClass({
  render (){
<<<<<<< HEAD
    return(
      <a href="https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg" className='button is-danger is-large '>
        <span className="icon"><i className="fa fa-yelp"></i></span>
        <span>yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
=======
    const url = 'https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg'
    return(
      <div>
        <a href={url} className='button is-danger is-large'>
          <span className="icon"><i className="fa fa-yelp"></i></span>
          <span>Review FVI on Yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
      </div>
>>>>>>> 3c2e5a9534b11d590bfbc43e41cf7d09113a96b4
    )
  }
})
