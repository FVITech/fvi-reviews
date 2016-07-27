import React from 'react'

export default React.createClass({


  reviewList(){
    return

    this.props.reviews.map(function(r){
      return (

        <div key={r.created_time} >

          <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={r.data}/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
              <strong>{r.reviewer.name}</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
              {r.review_text}
              </p>
            </div>
          <nav className="level">
            <div className="level-left">
              <a className="level-item">
              <span className="icon is-small"><i className="fa fa-reply"></i></span>
              </a>
              <a className="level-item">
              <span className="icon is-small"><i className="fa fa-retweet"></i></span>
              </a>
              <a className="level-item">
              <span className="icon is-small"><i className="fa fa-heart"></i></span>
              </a>
            </div>
          </nav>
          </div>
          <div className="media-right">
          <button className="delete"></button>
          </div>
          </article>

        </div>
      )

    })
  },


  render (){
    return(

      <div>

        {this.reviewList()}

      </div>

    )
  }
})
