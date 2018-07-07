import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text
} from 'react-native';

import Style from './Style';

export default class CommandButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: -1, //used only to force re-render
        }
    }
 
    render() {
        return (
            <TouchableHighlight 
                style={Style.commandButtonContainer}
                underlayColor="#193441"
                onPress={this._onButtonPressed.bind(this)}>
                <Text style={Style.commandButtonText}>
                    {this.props.value}
                </Text>
            </TouchableHighlight>);
    }

    _onButtonPressed() {
        let newValue = this.props.parentPress(this.props.value);
        this.setState({ value: newValue });
    }
}