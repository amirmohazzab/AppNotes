import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'
import Home from './app/screens/Home';
import AddNote from './app/screens/AddNote';
import { NoteProvider } from './app/context/NoteContext';
import UpdateNote from './app/screens/UpdateNote';

const Stack = createStackNavigator();



const App = () => {

    
    SplashScreen.hide({fade: true});
       
   
    return ( 
        <NoteProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}} >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Add' component={AddNote} />
                    <Stack.Screen name='Update' component={UpdateNote} />
                </Stack.Navigator>
            </NavigationContainer>
        </NoteProvider>
     );
}
 
export default App;
