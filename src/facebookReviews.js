import React from 'react'
import ReviewList from './facebookList'


const token = 'EAACbrcvyUC4BAGF6K2jxADXY94RPwO1i3wLfEQIbvB8CfebgWt17MD4UlFw1TKAQ4CYh2FmJu8KEjWHVOxV6qPhHMZCZAnORqfHdMr52KL6ZBFZBqUXdvqycNNotdKIMPq7eZCtYd0NOLwzROZBqAIfTcFRhHKZC4MrQv1DO32IKwvgXHpZBpwp3'

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
      // `/746661705385761/ratings?access_token=${token}`, //leotheLion page
      `/702254009919090/ratings?access_token=${token}`, //FVI page
      'GET',
      {},
      function(response) {
        getReviews(response.data)// recieving payload..good
        console.log(response.data, 'recieving payload')
      },
    );

       const getReviews = (d) =>{

         this.setState({reviews: d})
         console.log(this.state.reviews)
       }

},

render (){

  return(

    <div>

      <ReviewList reviews={this.state.reviews} />

    </div>

  )
}
})
