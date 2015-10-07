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

class HelloWorld extends React.Component {
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

class PropertyListingsApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Listings',
          component: HelloWorld
        }} />
    );
  }
}


var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('PropertyListings', () => PropertyListingsApp);
