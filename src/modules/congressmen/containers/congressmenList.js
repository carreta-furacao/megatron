import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import React, { Component } from 'react'
import { Profile } from '../components/profile'

export class CongressmenList extends Component {
  static propTypes = {
    congressmen: PropTypes.array.isRequired
  }

  renderCongressman = ({ item }) => (<Profile congressman={item} />)

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
