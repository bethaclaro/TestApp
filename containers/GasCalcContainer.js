import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import defStyles from '../constants/Styles';
import defColors from '../constants/Colors'
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react/native';


@observer
export default class GasCalcContainer extends Component {
    
    @observable pricePerLiter = 0
    @observable totalKM = 0
    @observable avgKM = 0

    @computed get totalGasFee() {
        let g = (this.reqdLiters*this.pricePerLiter).toLocaleString('en', {minimumFractionDigits:2})
        if(isNaN(this.reqdLiters))
            return "0.00"
        else
            return g
    }

    @computed get reqdLiters() {
        let x = this.totalKM/this.avgKM
        if(isNaN(x))
            return "0.00"
        else 
            return x.toLocaleString('en', {minimumFractionDigits:2})
    }

    constructor(props) {
        super(props)
        this.onPressMenu = this.onPressMenu.bind(this)
        this.onClearPressHandler = this.onClearPressHandler.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeTotalKM = this.onChangeTotalKM.bind(this)
        this.onChangeAvg = this.onChangeAvg.bind(this)
    }

    padZeros(num,dig) {
    	return Array(Math.max(dig - String(num).length + 1, 0)).join(0) + num;
    }

    onPressMenu(e) {
        this.props.navigation.navigate('DrawerToggle')
    }

    onClearPressHandler(e) {
        this.avgKM = 0
        this.pricePerLiter = 0
        this.totalKM = 0
    }

    onChangePrice(e) {
        this.pricePerLiter = e
    }

    onChangeTotalKM(e) {
        this.totalKM = e
    }

    onChangeAvg(e) {
        this.avgKM = e
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} keyboardShouldPersistTaps={false} >
                
                <View style={defStyles.header}>
                <Button icon={{name: 'menu'}} backgroundColor={defColors.menuButtonColor} onPress={this.onPressMenu} />
                    <Text style={{color: '#fff', flex: 1}}>Gas Calculator</Text>
                </View>
                
                <View style={localStyle.result}>
                    <Text style={localStyle.resultText}>{this.totalGasFee}</Text>
                </View>

                <ScrollView style={defStyles.menuContainer}>

                    <FormLabel>Price/Liter</FormLabel>
                    <FormInput keyboardType="numeric" onChangeText={this.onChangePrice} />

                    <FormLabel>Total Kilometers</FormLabel>
                    <FormInput keyboardType="numeric" onChangeText={this.onChangeTotalKM} />

                    <FormLabel>Avg km/L</FormLabel>
                    <FormInput keyboardType="numeric" onChangeText={this.onChangeAvg} />

                    <FormLabel>Req'd Liters (uneditable)</FormLabel>
                    <FormLabel>{this.reqdLiters}</FormLabel>
                    
                    <Button style={localStyle.button} title="Clear" 
                        backgroundColor={defColors.regularButtonColor}
                        onPress={this.onClearPressHandler}/>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const localStyle = StyleSheet.create({
    button: {
        paddingTop: 20
    },
    result: {
        backgroundColor: '#307672',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        color: 'white',
        fontSize: 30
    },
    timeInputGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    timeText: {
        color: '#1a3c40', fontSize: 20
    },
    timeButtons: {
        backgroundColor: "#137EA8"
    },
    timePicker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.95)'
    }
})