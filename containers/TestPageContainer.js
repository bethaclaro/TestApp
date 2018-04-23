import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import defaultStyles from '../constants/Styles';
import GasCalcContainer from './GasCalcContainer';
import ParkingCalcContainer from './ParkingCalcConatiner';

export default TabNavigator({
    Parking: {screen: ParkingCalcContainer},
    Gas: {screen: GasCalcContainer}
})