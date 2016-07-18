


  import React from 'react'
  import {mount, shallow} from 'enzyme'
  import {expect} from 'chai'


import YelpButton from "../src/yelpButton"


  Feature('button','', ()=>{

    const wrapper = mount(<YelpButton/>)

    Scenario('User wants to review fvi.edu with yelp',()=>{


      Given('the yelp button load',()=>{
        expect(wrapper.containsAllMatchingElements([
            <span>yelp</span>
         ])).to.equal(true);
      })

      When('the user clicks the button',()=>{
        wrapper.find('a').simulate('click')
      })

      Then('the user should be directed to the yelp review page',()=>{
          expect(wrapper.find("https://www.yelp.com/writeareview/biz/5hFFu5-9B5aXN2NahKt2qg?return_url=%2Fbiz%2F5hFFu5-9B5aXN2NahKt2qg")).to.exist
      })


    })
  })
