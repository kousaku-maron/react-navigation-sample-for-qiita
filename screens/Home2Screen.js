import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button } from 'react-native'

class Home2Screen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Home2</Text>
        <Button
          title="go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})

export default Home2Screen