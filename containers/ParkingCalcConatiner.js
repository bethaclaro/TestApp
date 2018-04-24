import React, { Component } from 'react';
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react/native';
import { Button as NButton, SafeAreaView, Text, ScrollView, StyleSheet, View, Modal } from 'react-native';
import defaultStyles from '../constants/Styles';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';

@observer
export default class ParkingCalcContainer extends Component {

    @observable selectedTimeInHours = 0
    @observable selectedTimeInMinute = 0
    @observable selectedTimeOutHours = 0
    @observable selectedTimeOutMinute = 0
    @observable isModalVisible = false
    @observable isTimeIn = true

    // @observable totalParkingFee = 0.00

    @observable firstN = 0
    @observable firstNHrsFee = 0
    @observable succeedingFee = 0
    

    @computed get timeIn() {
        return this.selectedTimeInHours.toString() + ":" + this.selectedTimeInMinute.toString()
    }

    @computed get timeOut() {
        return this.selectedTimeOutHours.toString() + ":" + this.selectedTimeOutMinute.toString()
    }

    @computed get parkingFee() {
        return this.firstNHrsFee * 6
    }

    constructor(props) {
        super(props)
        this.onButtonPressHandler = this.onButtonPressHandler.bind(this) 
        this.onValueChange = this.onValueChange.bind(this)
        this.onTimeInPress = this.onTimeInPress.bind(this)
        this.onTimeOutPress = this.onTimeOutPress.bind(this)
        this.onTimePickerChange = this.onTimePickerChange.bind(this)
        this.onTimeSelected = this.onTimeSelected.bind(this)
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

    onValueChange(e) {
    }

    onButtonPressHandler(e) {
    }

    onTimeSelected(e) {
        this.isModalVisible = false
    }

    render() {
        return (
            <SafeAreaView style={defaultStyles.container} keyboardShouldPersistTaps={false} >

                <Modal visible={this.isModalVisible}>
                    <SafeAreaView>
                        <TimePicker selectedHour={this.selectedHour} selectedMinute={this.selectedMinute}
                                onChange={this.onTimePickerChange} />
                        <Button title="Done" backgroundColor="#137EA8" onPress={this.onTimeSelected} />
                    </SafeAreaView>
                </Modal>

                <View style={defaultStyles.header}>
                    <Text style={{color: '#fff', flex: 1}}>Parking Fee Calculator</Text>
                </View>
                
                <View style={localStyle.result}>
                    <Text style={localStyle.resultText}>{this.parkingFee}</Text>
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

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time In</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.timeIn}
                            </Text>
                            <Button backgroundColor="#137EA8" icon={{name: 'access-time'}} title="Set" onPress={this.onTimeInPress} />
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time Out</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.timeOut}
                            </Text>
                            <Button backgroundColor="#137EA8" icon={{name: 'access-time'}} title="Set" onPress={this.onTimeOutPress} />
                        </View>
                    </View>

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
        paddingTop: 20
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
    },
    timeInputGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    timeText: {
        color: 'white', fontSize: 20
    },
    timeButtons: {
        backgroundColor: "#137EA8"
    }
})