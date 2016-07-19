import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'

import YelpButton from '../src/yelpButton'


Feature('Review buttons',
'The review sites are google, facebook and yelp.', ()=>{

  const wrapper = shallow(<YelpButton/>)



  Scenario('User wants to review fvi.edu with yelp',()=>{


    Given('the yelp button loads',()=>{
      expect(wrapper.containsAllMatchingElements([
        <span>Review FVI on Yelp</span>
      ])).to.equal(true);
    })

    When('the user clicks the button',()=>{
    	wrapper.find('a').simulate('click')
    })


    Then('the user should be directed to the yelp review page',()=>{
      expect(wrapper.matchesElement(
        <div>
          <a
            href='https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg'
            className='button is-danger is-large'
          >
            <span className="icon"><i className="fa fa-yelp"></i></span>
            <span>Review FVI on Yelp</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </div>
      )).to.equal(true)
    })

  })


})

// Scenario: User wants to review fvi.edu with yelp
//   Given the yelp button loads
//   When the user clicks the button
//   Then the user should be directed to the yelp review page
//
//
