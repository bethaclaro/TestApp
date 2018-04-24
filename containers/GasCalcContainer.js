import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import defaultStyles from '../constants/Styles';
import defColors from '../constants/Colors'

export default class GasCalcContainer extends Component {
    
    constructor(props) {
        super(props)

        this.onPressMenu = this.onPressMenu.bind(this)
    }

    onPressMenu(e) {
        this.props.navigation.navigate('DrawerToggle')
    }

    render() {
        return (
            <SafeAreaView style={defaultStyles.container} keyboardShouldPersistTaps={false} >
                
                <View style={defaultStyles.header}>
                <Button icon={{name: 'menu'}} backgroundColor={defColors.menuButtonColor} onPress={this.onPressMenu} />
                    <Text style={{color: '#fff', flex: 1}}>Gas Calculator</Text>
                </View>
                    
            </SafeAreaView>
        )
    }
}