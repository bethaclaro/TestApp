import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TabNavigator } from 'react-navigation';

class ParkingCalcScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Parking Calculator</Text>
            </View>
        )
    }
}

class GasCalcScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Gas Calculator</Text>
            </View>
        )
    }
}

export default TabNavigator({
    Parking: {screen: ParkingCalcScreen},
    Gas: {screen: GasCalcScreen}
})


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });