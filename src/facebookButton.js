import React from 'react'

export default React.createClass({

  render (){
    return(
      <div>
        <a className='button is-info is-large' href='https://www.facebook.com/FloridaVocationalInstitute/reviews'>
          <span className="icon"><i className="fa fa-facebook"></i></span>
          <span>Review FVI on Facebook</span>
        </a>
      </div>
    )
  }
})



  // <div>
  //   <p className='title'>Hello</p>
  //   <button className='button' onClick={this.fbReviews}>Review FVI on Facebook</button>
  // </div>
