'use strict';
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Style  from './src/Style';
import NumberButton from './src/NumberButton';
import CommandButton from './src/CommandButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        headerValue: "Scramble",
        numberButtons: [
          [ 1,  2,  3,  4 ],
          [ 5,  6,  7,  8 ],
          [ 9, 10, 11, 12 ],
          [13, 14, 15, 16 ]
        ],
        gameStarted: false,
        steps: 0,
    }
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.headerContainer}>
          <Text style={Style.headerText}>{this.state.headerValue}</Text>
        </View>
        <View style={Style.scoreContainer}>
          <Text style={Style.scoreText}>Steps: {this.state.steps}</Text>
        </View>
        <View style={Style.boardContainer}>
          {this._renderNumberButtons()}
        </View>
        <View style={Style.footerContainer}>
          <View style={Style.footerContainerHeader}></View>
          <View style={Style.footerContainerBody}>
            <CommandButton
              value='  New  '
              parentPress={this._newGame.bind(this)}>
            </CommandButton>
          </View>
          <View style={Style.footerContainerFooter}></View>
        </View>
      </View>
    );
  }

  _renderNumberButtons() {
    if (this._isGameOver())
    {
      return(
        <View style={Style.gameStatusContainer}>
          <Text style={Style.gameStatusText}>!!! Game Over !!!</Text>
        </View>
      );
    }
    
    let views = [];
    
    for (var r = 0; r < this.state.numberButtons.length; r++) {
      let row = this.state.numberButtons[r];
      let numberRow = [];

      for (var i = 0; i < row.length; i++) {
          let number = row[i];

          numberRow.push(
              <NumberButton
                value={number}
                row={r}
                col={i}
                key={r + "-" + i}
                parentPress={this._onNumberButtonPressed.bind(this)}
              />
          );
      }

      views.push(<View style={Style.numberRow} key={"row-" + r}>{numberRow}</View>)
    }

    return views;
  }

  _updateNumberButtons(blankButton, value, row, col) {
    let currentNumberButtons = this.state.numberButtons;
    currentNumberButtons[blankButton.row][blankButton.col]=value;
    currentNumberButtons[row][col]=16;

    this.setState({
      numberButtons: currentNumberButtons,
      steps: this.state.steps+1, 
    });
  }

  _onNumberButtonPressed(value, row, col) {
    let blankButton=this._findBlankButton();
    let isMovePossible = this._ifMovePossible(blankButton, row, col);
    if (isMovePossible)
    {
      this._updateNumberButtons(blankButton, value, row,col);
    }

    return 0;
  }

  _isGameOver()
  {
    if (this.state.gameStarted == false)
    {
      return false;
    }

    var isGameOver = true;
    var counter = 0;

    for (var r = 0; r < this.state.numberButtons.length; r++) {
      let row = this.state.numberButtons[r];
      for (var i = 0; i < row.length; i++) {
        counter++;
        if (row[i] != counter)
        {
          isGameOver = false;
          break;
        }
      }

      if (isGameOver == false)
      {
        break;
      }
    }

    return isGameOver;
  }

  _ifMovePossible(blankButton, row, col)
  {
    let rowDistance = (blankButton.row > row) ? blankButton.row - row : row- blankButton.row;
    if (rowDistance > 1)
    {
      return false;
    }

    let colDistance = (blankButton.col > col) ? blankButton.col - col : col -blankButton.col;
    if (colDistance > 1)
    {
      return false;
    }

    if ((rowDistance == 0) && (colDistance == 0))
    {
      return false;
    }

    if ((rowDistance == 1) && (colDistance == 1))
    {
      return false;
    }

    return true;
  }

  _findBlankButton()
  {
    let blankButton = {
      row: 0,
      col: 0,
    };
    
    for (var r = 0; r < this.state.numberButtons.length; r++) {
      let row = this.state.numberButtons[r];
      for (var i = 0; i < row.length; i++) {
        if (row[i] == 16)
        {
          blankButton.row = r;
          blankButton.col = i;
          break;
        }
      }
    }
    return blankButton;
  }

  _newGame()
  {
    let randomNumbers = this._getRandomNumbers();
    let currentNumberButtons = this.state.numberButtons;

    let index = 0;
    for (var r = 0; r < currentNumberButtons.length; r++) {
      let row = currentNumberButtons[r];
      for (var i = 0; i < row.length; i++) {
        row[i] = randomNumbers[index];
        index++;
      }
    }

    this.setState({
      numberButtons: currentNumberButtons, 
      gameStarted: true,
      steps: 0,
      gameover: false,
    });

    return 0;
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  _getRandomNumbers()
  {
    let numbers = [];
    let indexes = [];

    for (var i = 0; i < 16; i++)
    {
      indexes.push(i);
    }

    do
    {
        let randomIndex = this._getRandomInt(indexes.length);
        numbers.push(indexes[randomIndex]+1);
        indexes.splice(randomIndex, 1);
    }
    while (indexes.length > 0);

    return numbers;
  }
}