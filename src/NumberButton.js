import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';

import Style from './Style';

export default class NumberButton extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: -1, //used only to force re-render
        }
    }
 
    render() {
        if (this.props.value == 16)
        {
            return <View style={Style.numberButtonBlankContainer}></View>;
        }
        else
        {
            return (
                <TouchableHighlight 
                    style={Style.numberButtonContainer}
                    underlayColor="#193441"
                    onPress={this._onButtonPressed.bind(this)}>
                    <Text style={Style.numberButtonText}>
                        {this.props.value}
                    </Text>
                </TouchableHighlight>);
        }
    }

    _onButtonPressed() {
        let newValue = this.props.parentPress(this.props.value, this.props.row, this.props.col);
        this.setState({ value: newValue });
    }
}