/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class PropertyListingsApp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Hello World!
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('PropertyListings', () => PropertyListingsApp);
