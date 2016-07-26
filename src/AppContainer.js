import React from 'react'
import YelpButton from './yelpButton'
import FacebookButton from './facebookButton.js'
import GoogleButton from './GoogleButton'
import YelpReviews from './yelpReviews'


export default React.createClass({

  render (){
    return(
      <div className='is-flex' style={styles.app}>
        <div  className="is-flex" style={styles.nav}>
          <a href="#">
            <img height='60' src="http://www.fvi.edu/wp-content/themes/fvi/images/fvi-logo.png"/>
          </a>
        </div>

        <div  className='is-flex' style={styles.content}>


          <div style={styles.button}>
            <YelpButton/>
          </div>

          <div style={styles.button}>
            <FacebookButton/>
          </div>

          <div style={styles.button}>
            <GoogleButton/>
          </div>


            <YelpReviews />


        </div>
      </div>
    )
  }
})

const styles = {
  app:{
    flexDirection: 'column',
    height: '100vh',

  },
  nav:{
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: 'white',
    fontSize: '30',
    flex: 1,
  },
  content:{
    flex:8  ,
    alignItems:'center',
    justifyContent:'center',
     flexWrap: 'wrap',
    flexDirection: 'column',


  },
  button:{
    margin: 20
  }
}
