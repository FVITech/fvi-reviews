import React from 'react'
import ReviewList from 'facebookList'

const token = 'EAAXNYSec0M0BAPL2w1EyrxHzM1PmR1UEoJ6dXtI5AD2siF7xwoocyGz8a39ZCGYWZA6xuKUUlHJx2fS4GS6mA9qwBM8hZAzFYdf2otlNC6cS9bFbvjhvUmmUnCfJZB17LWHnpTIMx18BjpP7dj513cv0Adfk4SK5t8AwXwl0GAZDZD'

export default React.createClass({

getInitialState(){
  return{
    reviews: [],
<<<<<<< HEAD
  
  }
},

componentWillMount(){  console.log(r)
=======
  }
},

componentWillMount(){
>>>>>>> moved fbreviews to fblist
  this.fbReviews();
},

fbReviews(){

  FB.api(
  `/746661705385761/ratings?access_token=${token}`,
  'GET',
  {},
  function(response) {
    getIds(response.data) //user picture
  },
  );

<<<<<<< HEAD

  const getIds = (data)=>{
  const ids = data.map(r=>r.reviewer.id)

    //ids.map to get users picture
    ids.map(id=>{

    FB.api(
      `/${id}/picture?access_token=${token}`,
      `GET`,
      {},
      function(imgUrls){

        mergeIntoReviews(imgUrls) // imgUrls pulls user avatar url
      }
    )
  })
  }

    const mergeIntoReviews = (urls)=>{
      console.log(this.state.reviews)
        Object.assign(this.state.reviews[0],urls) // merging reviews and imgUrls
        this.setState({reviews:d})
    }
=======
>>>>>>> moved fbreviews to fblist
},


render (){
    // console.log(this.state.reviews)
  return(

    <div>
      <ReviewList reviews = {this.state.reviews} />

    </div>

  )
}
})
