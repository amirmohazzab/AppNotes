import React, {useEffect} from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase from '@react-native-firebase/app'
import Home from './app/screens/Home';
import AddNote from './app/screens/AddNote';
import { NoteProvider } from './app/context/NoteContext';
import UpdateNote from './app/screens/UpdateNote';



const Stack = createStackNavigator();


const App = () => {

    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
          console.log("TOKEN:", token);
        },
      
        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: function (notification) {
          console.log("NOTIFICATION:", notification);
      
          // process the notification
      
          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
      
        // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        onAction: function (notification) {
          console.log("ACTION:", notification.action);
          console.log("NOTIFICATION:", notification);
      
          // process the action
        },
      
        // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
        onRegistrationError: function(err) {
          console.error(err.message, err);
        },
      
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
      
        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,
      
        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         * - if you are not using remote notification or do not have Firebase installed, use this:
         *     requestPermissions: Platform.OS === 'ios'
         */
        requestPermissions: true,
      });

    useEffect(() => {
        SplashScreen.hide();

        Firebase.initializeApp(App);
    }, [])
    
       
   
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
