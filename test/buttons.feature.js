import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import FacebookButton from '../src/facebookButton.js'
import AppContainer from '../src/AppContainer'


Feature('Review buttons','The review sites are google, facebook and yelp.', ()=>{

  Scenario('User wants to review fvi.edu with facebook',()=>{

    const wrapper = shallow(<FacebookButton/>)

    Given('the facebook button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Facebook</span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
    	wrapper.find('a').simulate('click')
    })


    Then('the user should be directed to the facebook review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a href='https://www.facebook.com/FloridaVocationalInstitute/reviews'
            className='button is-info is-large'>
            <span className="icon"><i className="fa fa-facebook"></i></span>
            <span>Review FVI on Facebook</span> &nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </div>
      )).to.equal(true)
    })

  })
})



// Scenario: User wants to review fvi.edu with facebook
//   Given the google button loads
//   When the user clicks the button
//   Then the user should be directed to the facebook review page
