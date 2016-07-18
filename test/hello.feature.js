import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'


import Hello from '../src/hello'


Feature('Gravatar','', ()=>{

  const wrapper = mount(<Hello/>)

  Scenario('User Sees the Entire Interface',()=>{
    Given('UI Says Hello',()=>{
      expect().to.equal()
        expect(wrapper.text()).to.contain('Hello')
    })


  })
})
