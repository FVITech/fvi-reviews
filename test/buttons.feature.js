import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
<<<<<<< HEAD

import YelpButton from '../src/yelpButton'


Feature('Review buttons',
'The review sites are google, facebook and yelp.', ()=>{

  const wrapper = shallow(<YelpButton/>)



  Scenario('User wants to review fvi.edu with yelp',()=>{


    Given('the yelp button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Yelp</span>
=======
import FacebookButton from '../src/facebookButton.js'
import AppContainer from '../src/AppContainer'


Feature('Review buttons','The review sites are google, facebook and yelp.', ()=>{

  Scenario('User wants to review fvi.edu with facebook',()=>{

    const wrapper = shallow(<FacebookButton/>)

    Given('the facebook button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Facebook</span>
>>>>>>> facebook
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
    	wrapper.find('a').simulate('click')
    })


<<<<<<< HEAD
    Then('the user should be directed to the yelp review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a
            href='https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg'
            className='button is-danger is-large'
          >
            <span className="icon"><i className="fa fa-yelp"></i></span>
            <span>Review FVI on Yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;
=======
    Then('the user should be directed to the facebook review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a href='https://www.facebook.com/FloridaVocationalInstitute/reviews'
            className='button is-info is-large'>
            <span className="icon"><i className="fa fa-facebook"></i></span>
            <span>Review FVI on Facebook</span> &nbsp;&nbsp;&nbsp;&nbsp;
>>>>>>> facebook
          </a>
        </div>
      )).to.equal(true)
    })

  })
<<<<<<< HEAD


})

// Scenario: User wants to review fvi.edu with yelp
//   Given the yelp button loads
//   When the user clicks the button
//   Then the user should be directed to the yelp review page
//
//
=======
})



// Scenario: User wants to review fvi.edu with facebook
//   Given the google button loads
//   When the user clicks the button
//   Then the user should be directed to the facebook review page
>>>>>>> facebook
