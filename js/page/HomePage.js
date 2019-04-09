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
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import PopularPage from './PopularPage';
import FavoritePage from './FavoritePage';
import TrendingPage from './TrendingPage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class HomePage extends Component<Props> {

    _tabNavigator(){
        return createAppContainer(createBottomTabNavigator({
            PopularPage:{
                screen: PopularPage,
                navigationOptions:{
                    tabBarLabel: '最热',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}
                        />
                    ),
                }
            },
            TrendingPage:{
                screen: TrendingPage,
                navigationOptions:{
                    tabBarLabel: '趋势'
                }
            },
            FavoritePage:{
                screen: FavoritePage,
                navigationOptions:{
                    tabBarLabel: '搜藏'
                }
            },
            MyPage:{
                screen: MyPage,
                navigationOptions:{
                    tabBarLabel: '我的'
                }
            }
        }));
    }
  render() {
    const Tab = this._tabNavigator();
    return <Tab/>
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
