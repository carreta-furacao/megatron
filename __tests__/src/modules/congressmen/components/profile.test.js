import React from 'react'
import { shallow } from 'enzyme'

import { Profile } from '../../../../../src/modules/congressmen/components/profile'

const props = {
  congressman: {
    id: 178957,
    uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/178957',
    nome: 'ABEL MESQUITA JR.',
    siglaPartido: 'DEM',
    uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36769',
    siglaUf: 'RR',
    idLegislatura: 55,
    urlFoto: 'http://www.camara.leg.br/internet/deputado/bandep/178957.jpg'
  }
}

describe('<Profile />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<Profile {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
