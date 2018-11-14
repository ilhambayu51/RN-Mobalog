import {Navigation} from 'react-native-navigation';
import {registerScreen} from './Screens';

registerScreen();

Navigation.startTabBasedApp({
  tabs : [
    {
      label: 'Home',
      screen: 'tab.Home',
      title: 'Home',
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      title: 'Heroes',
    },
    {
      label: 'Setting',
      screen: 'tab.Setting',
      title: 'Setting',
    }
  ]
});