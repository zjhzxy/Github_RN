/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class PopularPage extends Component<Props> {

  render() {

    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      PopularTab1:{
        screen: PopularTab,
        navigationOptions:{
          title: 'Tab1'
        },
      },
      PopularTab2:{
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2',
        },
      },
    }))
    return <View style={{flex:1, marginTop:20}}>
      <TabNavigator/>
    </View>
  }
}

class PopularTab extends Component{
  render(){
    const {tabLabel} = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLabel}</Text>
          <Text onPress={() => {
            NavigationUtil.goPage({
              navigation: this.props.navigation,
            }, 'DetailPage')
          }}>跳转到详情页</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
