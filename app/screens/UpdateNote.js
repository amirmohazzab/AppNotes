import React, {useState, useContext, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { NoteContext } from '../context/NoteContext';
import { strings } from '../locale/i18n';


const UpdateNote = ({navigation, route}) => {

    const [note, setNote] = useState();

    const {getNotes, updateNote, deleteNote} = useContext(NoteContext);

    useEffect(() => {
        let noteIndex = getNotes.findIndex(n => n._id === route.params.id);

        if (noteIndex > -1) {
            setNote({
                _id: route.params.id,
                title: getNotes[noteIndex].title,
                content: getNotes[noteIndex].content
            })
        }
    }, [getNotes, route.params.id])

    const UpdateNote = () => {
        updateNote(note, route.params.id);
        navigation.navigate('Home')
    }

    const DeleteNote = () => {
        deleteNote(route.params.id);
        navigation.navigate('Home')
    }

    if (!note) return (<Text> Loading... </Text>)
    
    return ( 
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={{backgroundColor: 'blue', height: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: "#fff", fontSize: 20}}> {strings("updateHeaderTitle")} </Text>
            </View>
            <View style={{flex: 1, padding: 20}}>
                <Text> {strings("titleInput")} : </Text>
                <TextInput 
                    value={note.title} 
                    onChangeText={title => setNote({title, content: note.content})} 
                    style={{borderBottomWidth: 1, borderColor: 'grey', marginBottom: 10}}
                />

                <Text> {strings("contentInput")} : </Text>
                <TextInput 
                    multiline
                    value={note.content}
                    onChangeText={content => setNote({title: note.title, content})}
                    placeholderTextColor="grey"
                />
            </View>
            <View style={{backgroundColor: 'blue', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <TouchableOpacity activeOpacity={1} onPress={UpdateNote}>
                    <Text style={{color: "#fff", fontSize: 20}}> {strings("editNote_btn")} </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={DeleteNote}>
                    <Text style={{color: "#fff", fontSize: 20}}> {strings("deleteNote_btn")} </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
                    <Text style={{color: "#fff", fontSize: 20}}> {strings("cancel_btn")} </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default UpdateNote;