import React from 'react'

export default React.createClass({
  getInitialState(){
    return{
      reviews:[]
    }
  },
  componentWillMount(){
    this.getReviews()
  },
  getReviews(){

    FB.api(
      '/77787898974987789/ratings?access_token=dds',
      'GET',
      {},
      function(responses){
        console.log(responses)
      }
    )
    const ids = response.data.map(r=>r.reviewer.id)

    ids.map( id=>{
      FB.api(
        `/${id}/picture?access_token=dds`,
        'GET',
        {},
        function(imgUrls){
          console.log(imgUrls)
        }
      )
    })


    const handlesSetState = (d)=>this.setState({reviews: d})
  },

  reviewList(){
    this.state.reviews.map(r=><img src={r.} alt=""/>)
  },

  render (){
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="http://placehold.it/128x128" alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
        </article>
      </div>
      <div key={r.id} className='card' style={{padding:20, margin:20}}>

          <figure className="media-left">
            <p className="image is-64x64">
              <img src={r.user.image_url}/>
            </p>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{r.user.name}</strong> &nbsp; <small>{postTime}</small>
                <br/>
                {r.excerpt}
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <img src={r.rating_image_url} alt=""/>
              </div>
            </nav>
          </div>
      </div>
    )
  }
})
