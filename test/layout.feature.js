import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'


import AppContainer from '../src/AppContainer'


Feature('Layout',

  'The site should be laid out with a logo and header', ()=>{

  const wrapper = mount(<AppContainer/>)

  Scenario('User visits fvireview.surge.sh',()=>{
    Then('the user sees a logo and header',()=>{

        expect(wrapper.find('img')).to.exist
    })


  })
})
