import { Navigation } from "react-native-navigation/lib/dist/Navigation";
import Home from "./Home";
import Setting from "./Setting";
import Heroes from "./Heroes";

export function registerScreens() {
    Navigation.registerScreens('tab.Home',() => Home);
    Navigation.registerScreens('tab.Home',() => Heroes);
    Navigation.registerScreens('tab.Home',() => Setting);
}