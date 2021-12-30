import { mount } from '@vue/test-utils'
import TiangButton from '@tiang-ui/button'

describe('@tiang-ui/button', () => {
  it('create', () => {
    const wrapper = mount(TiangButton)
    expect(wrapper.classes()).toContain('tiang-button')
  })
})
