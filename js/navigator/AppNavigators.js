import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation';
import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
    }
},
    {
        defaultNavigationOptions:{
            header: null, //禁用StackNavigator的NavigationBar
        }
    });

const MainNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            header: null,
        }
    },

    DetailPage:{
        screen: DetailPage,
        navigationOptions:{
            header: null,
        }
    }
});

export default createAppContainer(createSwitchNavigator({
    init: InitNavigator,
    Main: MainNavigator,
},
    {
        navigationOptions:{
            header: null,
        }
    }))