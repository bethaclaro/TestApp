import React, { Component } from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native';
import defaultStyles from '../constants/Styles';
import { Button, FormLabel, FormInput } from 'react-native-elements';



export default class ParkingCalcContainer extends Component {

    constructor(props) {
        super(props)
        this.onButtonPressHandler = this.onButtonPressHandler.bind(this) 
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(e) {
    }

    onButtonPressHandler(e) {
        alert("hey!")
    }

    render() {
        return (
            <SafeAreaView style={defaultStyles.container}>
                <View style={defaultStyles.header}>
                    <Text style={{color: '#fff', flex: 1}}>Parking Calculator</Text>
                </View>
                
                <View style={localStyle.result}>
                    <Text style={localStyle.resultText}>0.00</Text>
                </View>

                <ScrollView style={localStyle.svcontainer}>
                    
                    <FormLabel>First N hours</FormLabel>
                    <FormInput autoFocus={true} keyboardAppearance="dark"
                        keyboardType="numeric" onChange={this.onValueChange}></FormInput>

                    <FormLabel>First N hours fee</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChange={this.onValueChange}></FormInput>
                    
                    <FormLabel>Succeeding hours fee</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChange={this.onValueChange}></FormInput>

                    <FormLabel>Time In</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChange={this.onValueChange}></FormInput>

                    <FormLabel>Time Out</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        onChange={this.onValueChange}></FormInput>

                    <Button style={localStyle.button}
                        title="Compute" backgroundColor="#137EA8" onPress={this.onButtonPressHandler} />

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const localStyle = StyleSheet.create({
    svcontainer: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 15
    },
    button: {
        paddingTop: 10
    },
    result: {
        backgroundColor: '#9f9f9f',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        color: 'white',
        fontSize: 30
    }
})