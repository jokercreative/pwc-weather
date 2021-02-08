import React from 'react'
import {mount} from 'enzyme'
import Location from './Location'

const mockprops = {
  location: '',
  updateLocation: jest.fn()
}

describe('Component: Location Input', () => {
  const wrapper = mount(<Location {...mockprops}/>)

  it('renders an input', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('updates value on input', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'hello' }
    })
    expect(wrapper.state('value')).toBe('hello')
  })

  it('updates submits form', () => {
    wrapper.find('form').simulate('submit')
    expect(wrapper.prop('updateLocation')).toHaveBeenCalled()
  })

})

