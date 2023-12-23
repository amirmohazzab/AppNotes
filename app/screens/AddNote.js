import React, {useState, useContext} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { NoteContext } from '../context/NoteContext';


const AddNote = ({navigation}) => {

    const [getTitle, setTitle] = useState('');
    const [getContent, setContent] = useState('');

    const {addNote} = useContext(NoteContext);

    const saveNote = () => {
        const note = {
            _id: Math.floor((Math.random() * 10000) + 1).toString(),
            title: getTitle,
            content: getContent
        }

        console.log(note);

        addNote(note);
        navigation.navigate('Home')
    }
    
    return ( 
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{backgroundColor: 'blue', height: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: "#fff", fontSize: 20}}> Create note </Text>
            </View>
            <View style={{flex: 1, padding: 20}}>
                <Text> Title: </Text>
                <TextInput value={getTitle} onChangeText={title => setTitle(title)} style={{borderBottomWidth: 1, borderColor: 'grey'}}/>
                <TextInput 
                    multiline
                    value={getContent}
                    onChangeText={content => setContent(content)}
                    placeholder="Main Content"
                    placeholderTextColor="grey"
                />
            </View>
            <View style={{backgroundColor: 'blue', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <TouchableOpacity activeOpacity={1} onPress={saveNote} style={{}}>
                    <Text style={{color: "#fff", fontSize: 20}}> Save note </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')} style={{}}>
                    <Text style={{color: "#fff", fontSize: 20}}> Cancel </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default AddNote;