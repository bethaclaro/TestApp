import React, { Component } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react/native'
import { Button as NButton, TextInput,
    SafeAreaView, Text, ScrollView, StyleSheet, View, Modal } from 'react-native'
import defStyles from '../constants/Styles'
import defColors from '../constants/Colors'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import TimePicker from 'react-native-simple-time-picker'
import moment from 'moment'

@observer
export default class ParkingCalcContainer extends Component {

    @observable selectedTimeInHours = 0
    @observable selectedTimeInMinute = 0
    @observable selectedTimeOutHours = 0
    @observable selectedTimeOutMinute = 0
    @observable isModalVisible = false
    @observable isTimeIn = true

    @observable firstN = 0
    @observable firstNHrsFee = 0
    @observable succeedingFee = 0
    @observable durationHrs = 0

    @computed get parkingFee() {
        if(this.selectedTimeOutHours==0)
            return this.padZeros(0,2) 

        let d = moment(this.timeOut, "HH:mm").diff(moment(this.timeIn, "HH:mm"), "hours")
        let amt = ((d - Number(this.firstN)) * Number(this.succeedingFee)) + Number(this.firstNHrsFee)

        return amt
    }

    @computed get timeIn() {
        let h = this.padZeros(this.selectedTimeInHours, 2)
        let m = this.padZeros(this.selectedTimeInMinute, 2)

        return h + ":" + m
        // return this.selectedTimeInHours.toString() + ":" + this.selectedTimeInMinute.toString()
    }

    @computed get timeOut() {
        let h = this.padZeros(this.selectedTimeOutHours, 2)
        let m = this.padZeros(this.selectedTimeOutMinute, 2)

        return h + ":" + m
    }

    constructor(props) {
        super(props)
        this.onButtonPressHandler = this.onButtonPressHandler.bind(this) 
        this.onTimeInPress = this.onTimeInPress.bind(this)
        this.onTimeOutPress = this.onTimeOutPress.bind(this)
        this.onTimePickerChange = this.onTimePickerChange.bind(this)
        this.onTimeSelected = this.onTimeSelected.bind(this)
        this.onPressMenu = this.onPressMenu.bind(this)
    }

    padZeros(num,dig) {
    	return Array(Math.max(dig - String(num).length + 1, 0)).join(0) + num;
    }
    
    onTimeInPress(e) {
        this.isTimeIn = true
        this.isModalVisible = true
    }

    onTimeOutPress(e) {
        this.isTimeIn = false
        this.isModalVisible = true
    }

    onTimePickerChange(h, m) {
        if(this.isTimeIn) {
            this.selectedTimeInHours = h
            this.selectedTimeInMinute = m
        } else {
            this.selectedTimeOutHours = h
            this.selectedTimeOutMinute = m
        }
    }

    onButtonPressHandler(e) {
        this.selectedTimeInHours = 0
        this.selectedTimeInMinute = 0
        this.selectedTimeOutHours = 0
        this.selectedTimeOutMinute = 0
        this.firstN = 0
        this.firstNHrsFee = 0
        this.succeedingFee = 0
    }

    onTimeSelected(e) {
        this.isModalVisible = false
    }

    onPressMenu(e) {
        this.props.navigation.navigate('DrawerToggle')
    }

    render() {
        return (
            <SafeAreaView style={defStyles.container} keyboardShouldPersistTaps={false} >

                <Modal visible={this.isModalVisible} transparent={true} >
                    <SafeAreaView style={localStyle.timePicker}>
                        <TimePicker selectedHour={this.selectedHour} selectedMinute={this.selectedMinute}
                                onChange={this.onTimePickerChange} />
                        <Button title="Done" backgroundColor={defColors.regularButtonColor} onPress={this.onTimeSelected} />
                    </SafeAreaView>
                </Modal>

                <View style={defStyles.header}>
                    <Button icon={{name: 'menu'}} backgroundColor={defColors.menuButtonColor} onPress={this.onPressMenu} />
                    <Text style={{color: '#fff', flex: 1}}>Parking Fee Calculator</Text>
                </View>
                
                <View style={localStyle.result}>
                    <Text style={localStyle.resultText}>{this.parkingFee}</Text>
                </View>

                <ScrollView style={defStyles.menuContainer}>
                    
                    <FormLabel>First N hours</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChangeText={(text)=>{this.firstN=text}}></FormInput>

                    <FormLabel>First N hours fee</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChangeText={(text)=>{this.firstNHrsFee=text}}></FormInput>
                    
                    <FormLabel>Succeeding hours fee</FormLabel>
                    <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChangeText={(text)=>{this.succeedingFee=text}}></FormInput>

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time In</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.timeIn}
                            </Text>
                            <Button backgroundColor={defColors.regularButtonColor} icon={{name: 'access-time'}} title="Set" onPress={this.onTimeInPress} />
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time Out</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.timeOut}
                            </Text>
                            <Button backgroundColor={defColors.regularButtonColor} icon={{name: 'access-time'}} title="Set" onPress={this.onTimeOutPress} />
                        </View>
                    </View>

                    <Button style={localStyle.button}
                        title="Clear" backgroundColor={defColors.regularButtonColor} onPress={this.onButtonPressHandler} />

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
