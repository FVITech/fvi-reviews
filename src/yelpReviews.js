import React from 'react'
import OAuth from './OAuth'


export default React.createClass({
  getInitialState(){
    return {
      reviews:[]
    }
  },
  getPayload(){

    const consumerKey = "vBjqc9wkl8Gxsf-QeF4ydA"
    const consumerSecret = "nRgk2K9x6EpZ1kYZzBVHmmo2ibE"
    const accessToken = "7H6Ye4DpHR9lErOmrESQSqlD3vMBZr3m"
    const accessTokenSecret = "DjDZUOZhR44wa0OfuTH8WKxVtm8"
    const signatureMethod = "HMAC-SHA1"


    const accessor = {
        consumerSecret : consumerSecret,
        tokenSecret : accessTokenSecret
    }

    const parameters = [
      ['callback', 'cb'],
      ['oauth_consumer_key', consumerKey],
      ['oauth_consumer_secret', consumerSecret],
      ['oauth_token', accessToken],
      ['oauth_signature_method', 'HMAC-SHA1']
    ]


    const message = {
        'action' : 'https://api.yelp.com/v2/business/florida-vocational-institute-miami',
        'method' : 'GET',
        'parameters' : parameters
    }

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    const parameterMap = OAuth.getParameterMap(message.parameters);

    $.ajax({
        'url' : message.action,
        'data' : parameterMap,
        'dataType' : 'jsonp',
        'jsonpCallback' : 'cb',
        'cache': true
    })
    .done((data, textStatus, jqXHR)=> this.setState({reviews: jqXHR.responseJSON}))
    .fail(()=>console.log('fucked up'))

  },
  componentWillMount(){
      this.getPayload()
  },
  render (){

    return(
      <div>{this.state.reviews}</div>
    )
  }
})
