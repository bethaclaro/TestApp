import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import defaultStyles from '../constants/Styles';

export default class ParkingCalcContainer extends Component {

    render() {
        return (
            <SafeAreaView style={defaultStyles.container}>
                <Text>Parking Calculator NEW</Text>
            </SafeAreaView>
        )
    }
}