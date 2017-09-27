import React from 'react'
import { shallow } from 'enzyme'

import { CongressmenList } from '../../../../../src/modules/congressmen/containers/congressmenList'
import { congressman } from '../../../../fixtures/congressman.fixture'

const props = {
  congressmen: [congressman]
}

describe('<CongressmenList />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<CongressmenList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
