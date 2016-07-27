import React from 'react'
import ReviewList from 'facebookList'

const token = 'EAAXNYSec0M0BAPL2w1EyrxHzM1PmR1UEoJ6dXtI5AD2siF7xwoocyGz8a39ZCGYWZA6xuKUUlHJx2fS4GS6mA9qwBM8hZAzFYdf2otlNC6cS9bFbvjhvUmmUnCfJZB17LWHnpTIMx18BjpP7dj513cv0Adfk4SK5t8AwXwl0GAZDZD'

export default React.createClass({

getInitialState(){
  return{
    reviews: [],
  }
},

componentWillMount(){
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
