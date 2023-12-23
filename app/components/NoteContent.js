import React from 'react'
import {View, Text} from 'react-native'


const NoteContent = ({note}) => {
    return ( 
        <View style={{flex: 1}}>
            <Text style={{color: '#fff'}}> {note.item.title} </Text>
            <View>
                <Text style={{color: '#fff'}}> 
                    {
                        note.item.content.length > 120 ?
                        `${note.item.content.substr(0,120)}...` :
                        note.item.content
                    }
                </Text>
            </View>
        </View>
     );
}
 
export default NoteContent;