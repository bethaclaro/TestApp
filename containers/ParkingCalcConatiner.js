import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react/native';
import { Button as NButton, SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native';
import defaultStyles from '../constants/Styles';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import TimePicker from 'react-native-simple-time-picker';

@observer
export default class ParkingCalcContainer extends Component {

    @observable selectedTimeInHours = 0
    @observable selectedTimeInMinute = 0
    @observable selectedTimeOutHours = 0
    @observable selectedTimeOutMinute = 0
    @observable isTimeInOverlayVisible = false
    @observable isTimeOutOverlayVisible = false
    @observable totalParkingFee = 0.00

    constructor(props) {
        super(props)
        this.onButtonPressHandler = this.onButtonPressHandler.bind(this) 
        this.onValueChange = this.onValueChange.bind(this)
        this.onTimeInChange = this.onTimeInChange.bind(this)
        this.onTimeOutChange = this.onTimeOutChange.bind(this)
        this.onTimeInPress = this.onTimeInPress.bind(this)
        this.onTimeOutPress = this.onTimeOutPress.bind(this)
    }

    onTimeInPress(e) {
        this.isTimeInOverlayVisible = !this.isTimeInOverlayVisible
    }

    onTimeOutPress(e) {
        this.isTimeOutOverlayVisible = !this.isTimeOutOverlayVisible
    }

    onTimeOutChange(h, m) {
        this.selectedTimeOutHours = h
        this.selectedTimeOutMinute = m
    }
    onTimeInChange(h,m) {
        this.selectedTimeInHours = h
        this.selectedTimeInMinute = m
    }

    onValueChange(e) {
    }

    onButtonPressHandler(e) {
        this.totalParkingFee = 10000.00
    }

    renderOverlay() {
        {/* <Overlay isVisible={this.isTimeInOverlayVisible} 
                    windowBackgroundColor="rgba(255,255,255, 0.5)"
                    width="auto" height="auto">
                    <NButton title="Press me to dismiss" onPress={this.onTimeInPress} />
                </Overlay> */}
    }

    render() {
        return (
            <SafeAreaView style={defaultStyles.container} keyboardShouldPersistTaps={false}>

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

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time In</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.selectedTimeInHours.toString() + ":" + this.selectedTimeInMinute.toString()}
                            </Text>
                            <Button icon={{name: 'access-time'}} title="Set" onPress={this.onTimeInPress} />
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
                        <FormLabel>Time Out</FormLabel>
                        <View style={localStyle.timeInputGroup}>
                            <Text style={localStyle.timeText}>
                                {this.selectedTimeOutHours.toString() + ":" + this.selectedTimeOutMinute.toString()}
                            </Text>
                            <Button icon={{name: 'access-time'}} title="Set" onPress={this.onTimeOutPress} />
                        </View>
                    </View>

                    {/* <NButton title="Set Time In" onPress={this.onTimeInPress} /> */}
                    
                    {/* <FormInput keyboardAppearance="dark"
                        keyboardType="numeric" onChange={this.onValueChange}></FormInput> */}
                    {/* <TimePicker height={50} selectedHour={this.selectedTimeInHours} selectedMinute={this.selectedTimeInMinute}
                        onChange={this.onTimeInChange} /> */}

                    {/* <FormLabel>Time Out</FormLabel> */}
                    
                    {/* <FormInput keyboardAppearance="dark"
                        onChange={this.onValueChange}></FormInput> */}
                    {/* <TimePicker selectedHour={this.selectedTimeOutHours} selectedMinute={this.selectedTimeOutMinute}
                        onChange={this.onTimeOutChange} /> */}

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
        // backgroundColor: 'blue',
        // padding: 10,
        // paddingLeft: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    timeText: {
        color: 'white', fontSize: 20
    }
})