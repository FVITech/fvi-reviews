import React from 'react'


const styles = {
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column'
}


export default React.createClass({

  render (){
    return(
      <div className='is-flex' style={styles}>
        <p className='title'>Hello</p>
      </div>
    )
  }

})
