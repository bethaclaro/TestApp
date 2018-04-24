import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import defaultStyles from '../constants/Styles';

export default class GasCalcContainer extends Component {
    
    render() {
        return (
            <SafeAreaView style={defaultStyles.container}>
                
                <View style={defaultStyles.header}>
                    <Text style={{color: '#fff', flex: 1}}>Gas Calculator</Text>
                </View>
                    
            </SafeAreaView>
        )
    }
}