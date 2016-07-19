import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import GoogleButton from '../src/GoogleButton'

Feature('Review buttons','The review sites are google, facebook and yelp.', ()=>{
  Scenario('User wants to review fvi.edu with google',()=>{

    const wrapper = shallow(<GoogleButton/>)

    Given('the google button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span className="icon"><i className="fa fa-google"></i></span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
      wrapper.find('a').simulate('click');
    })

    Then('the user should be directed to the google review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a className='button is-danger' href='https://plus.google.com/105289039757508765516'>
            <span className="icon"><i className="fa fa-google"></i></span>
            Review on Google
          </a>
        </div>
      )).to.equal(true)
    })
  })

})
