import React from 'react'
import {View, StyleSheet} from 'react-native'


const Layout = ({children, left, right, title, footer}) => {
    return ( 
        <View>
            <View style={styles.header}>
                <View> {left} </View>
                <View> {title} </View>
                <View> {right} </View>
            </View>
            <View style={styles.body}> {children} </View>
            <View style={styles.footer}> {footer} </View>
        </View>
     );
}
 
export default Layout;


const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  body: { 
    flex: 1
  },
  footer: {
    height: 100,
    backgroundColor: '#ccc'
  }
})
