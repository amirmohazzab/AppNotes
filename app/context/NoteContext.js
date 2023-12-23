import React, {useState, useEffect, createContext} from 'react'
import { realmDb } from '../db/db';


export const NoteContext = createContext();


export const NoteProvider = ({children}) => {

    const [getNotes, setNotes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                await dataAction('Sync')
                
            } catch (err) {
                console.log(err)
            }
        };
        getData();
    }, []);

    const addNote = async note => {
        await dataAction('Add', note);
        await dataAction('Sync');
    };

    const updateNote = async (note, id) => {
        await dataAction('Update', note, id);
        await dataAction('Sync')
    };

    const deleteNote = async (id) => {
        await dataAction('Delete', null, id);
        await dataAction('Sync')
    };

    const dataAction = async (action, note, id) => {

        try {

            const realm =  await realmDb();

            switch(action) {
                case 'Sync':
                const notes = realm.objects('Note')
                return setNotes(notes)
                
                case 'Add':
                return realm.write(() => {realm.create('Note', note)})

                case 'Update':
                    return realm.write(() => {
                        const dbNote = realm.objectForPrimaryKey('Note', id);
                        dbNote.title = note.title;
                        dbNote.content = note.content
                    })

                case 'Delete':
                    return realm.write(() => {
                        realm.delete(realm.objectForPrimaryKey('Note', id))
                    })
            }

            realm.close();
            
        } catch (err) {
            console.log(err)
            alert('Note Error', 'Database Error')
        }

    }


    return (
        <NoteContext.Provider value={{getNotes, addNote, updateNote, deleteNote}}>
            {children}
        </NoteContext.Provider>
    )


}