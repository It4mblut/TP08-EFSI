import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import StackNavigator from "./navigation/StackNavigator";
import BottomBar from "./components/BottomBar";


export default function App(){

return(

<SafeAreaProvider>

<NavigationContainer>

<StatusBar style="light"/>


<View style={{flex:1}}>

<StackNavigator/>

<BottomBar/>

</View>


</NavigationContainer>

</SafeAreaProvider>

)

}