import React from 'react'
import YelpButton from './yelpButton'

export default React.createClass({

  render (){
    return(
      <div className='is-flex' style={styles.app}>
        <div  className="is-flex" style={styles.nav}>
          <a href="#">
            <img height='100' src="http://www.fvi.edu/wp-content/themes/fvi/images/fvi-logo.png"/>
          </a>
        </div>
        <div  className='is-flex' style={styles.content}>
          <YelpButton />
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
    flex:6  ,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'column',
  },
}
