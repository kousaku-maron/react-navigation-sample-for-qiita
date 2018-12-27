import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import Home2Screen from '../screens/Home2Screen'
import ProfileScreen from '../screens/ProfileScreen'
import ProfileEditScreen from '../screens/ProfileEditScreen'
import SettingScreen from '../screens/SettingScreen'
import TermOfServiceScreen from '../screens/TermOfServiceScreen'
import TutorialScreen from '../screens/TutorialScreen'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Home2: {
      screen: Home2Screen
    },
  },
  {
    initialRouteName: "Home",
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ProfileEdit: {
      screen: ProfileEditScreen
    },
  },
  {
    initialRouteName: "Profile",
  }
)

const Tab = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Setting: {
      screen: SettingScreen,
    },
  }
)

const Drawer = createDrawerNavigator({
  App: Tab,
  TermOfService: TermOfServiceScreen,
})

const AppNavigator = createSwitchNavigator({
  Tutorial: {
    screen: TutorialScreen,
  },
  Main: Drawer,
})

export default AppNavigator
