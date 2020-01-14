/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resulttext: '',
      calculatedText: '',
    };
    this.opeation = ['D', '+', '-', '*', '/'];
  }

  currentState() {
    const text = this.state.resulttext;

    this.setState({
      calculatedText: eval(text),
    });
  }
  validatetext() {
    const text = this.state.resulttext;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  buttonPressed(text) {
    if (text == '=') {
      return this.validatetext() && this.currentState();
    }
    this.setState({
      resulttext: this.state.resulttext + text,
    });
  }

  operations(opeation) {
    switch (opeation) {
      case 'D':
        {
          let text = this.state.resulttext.split('');
          text.pop();
          this.setState({
            resulttext: text.join(''),
          });
        }
        break;

      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.text == '') {
          return;
        }
        const lastChar = this.state.resulttext.split('').pop();
        if (this.opeation.indexOf(lastChar) > 0) return;
        this.setState({
          resulttext: this.state.resulttext + opeation,
        });
    }
  }
  render() {
    let rows = [];

    for (let i = 0; i < 4; i++) {
      let nums = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['.', 0, '='],
      ];
      let row = [];
      for (let j = 0; j < 4; j++) {
        row.push(
          <TouchableOpacity
            style={styles.btntext}
            onPress={() => this.buttonPressed(nums[j][i])}>
            <Text style={styles.btnproperty}>{nums[j][i]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.btnproperty}>{row}</View>);
    }

    let operation = [];

    for (let i = 0; i < this.opeation.length; i++) {
      let row = [];
      row.push(
        <TouchableOpacity onPress={() => this.operations(this.opeation[i])}>
          <Text style={styles.textcolor}>{this.opeation[i]}</Text>
        </TouchableOpacity>,
      );
      operation.push(<View style={styles.row}>{row}</View>);
    }

    return (
      <View style={styles.containter}>
        <View style={styles.result}>
          <Text style={styles.textSize}>{this.state.resulttext}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.textSize}>{this.state.calculatedText}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.row}>{rows}</View>
          <View style={styles.operation}>{operation}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  result: {
    flex: 1,
    backgroundColor: '#808B96',
  },
  btntext: {
    flex: 1,
    fontSize: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 50,
  },
  textcolor: {
    color: '#FCFCFB',
    fontSize: 30,
  },
  textSize: {
    fontSize: 30,
    color: '#FCFCFB',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#626567',
    fontSize: 30,
  },
  button: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#ECF0F1',
  },
  number: {
    flex: 4,
    backgroundColor: 'yellow',
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  operation: {
    flex: 1,
    backgroundColor: '#566573',
    fontSize: 30,
    alignItems: 'center',
  },
  row: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 50,
  },
  btnproperty: {
    fontSize: 30,
    color: '#2C3E50',
  },
});
