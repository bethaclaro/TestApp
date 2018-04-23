import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import defaultStyles from '../constants/Styles';

export default class GasCalcContainer extends Component {
    
    render() {
        return (
        <SafeAreaView style={defaultStyles.container}>
            <Text>Gas Calculator NEW</Text>
        </SafeAreaView>
        )
    }
}