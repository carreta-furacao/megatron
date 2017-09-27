// @flow

// $FlowFixMe
import Expo from 'expo'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { CongressmenList } from './modules/congressmen/containers/congressmenList'

const congressman = {
  id: 178957,
  uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/178957',
  nome: 'ABEL MESQUITA JR.',
  siglaPartido: 'DEM',
  uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/36769',
  siglaUf: 'RR',
  idLegislatura: 55,
  urlFoto: 'http://www.camara.leg.br/internet/deputado/bandep/178957.jpg'
}

const App = () => (
  <View style={styles.container}>
    <CongressmenList congressmen={[congressman]} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Expo.registerRootComponent(App)
export default App
