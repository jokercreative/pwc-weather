import React from 'react'
import {mount} from 'enzyme'
import Measurements from './Measurements'

const mockprops = {
  unit: 'metric'
}

describe('Component: Measurements Toggle', () => {
  const wrapper = mount(<Measurements {...mockprops}/>)

  it('renders a button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('disables currently selected unit button', () => {
    expect(wrapper.find('button[children="Metric"]').prop('disabled')).toBe(true)
  })

  it('enables not currently selected unit button', () => {
    expect(wrapper.find('button[children="Imperial"]').prop('disabled')).toBe('')
  })
})

