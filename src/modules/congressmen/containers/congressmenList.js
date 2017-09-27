import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

export class CongressmenList extends Component {
  static propTypes = {
    congressmen: PropTypes.array.isRequired // TODO: Create congressmen type
  }

  renderCongressman = ({ item }) => {
    return (
      <Text>{item.nome}</Text>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.congressmen}
        keyExtractor={item => item.id}
        renderItem={this.renderCongressman}
      />
    )
  }
}
