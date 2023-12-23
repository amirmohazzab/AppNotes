import React, {useState, useContext, useCallback} from 'react'
import {Text, FlatList, TouchableOpacity, StyleSheet, View} from 'react-native'
import NoteContent from '../components/NoteContent';
import { NoteContext } from '../context/NoteContext';
import { useFocusEffect } from '@react-navigation/native'


const Home = ({navigation}) => {

    const [notes, setNotes] = useState([]);

    const {getNotes} = useContext(NoteContext);

    useFocusEffect(
        useCallback(() => {
            setNotes(getNotes)
        }, [getNotes])
    )

    return ( 
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{backgroundColor: 'blue', height: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: "#fff", fontSize: 20}}> My Notes </Text>
            </View>
            <View style={{flex: 1, padding: 20}}>
                <FlatList 
                    data={notes}
                    keyExtractor={note => note._id}
                    renderItem={note => ( 
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Update', {id: note.item._id})} 
                            style={{padding: 10, fontSize: 20}}
                        >
                            <NoteContent note={{...note}} />  
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{backgroundColor: 'blue', height: 60, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Add')} style={{}}>
                    <Text style={{color: "#fff", fontSize: 20}}> Add new Note </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Home;

const styles = StyleSheet.create({
 
})




