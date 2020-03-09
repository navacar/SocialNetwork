import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    let DialogData =[
        {id: 1, name: 'Alexandr'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Maria'},
        {id: 6, name: 'Andrew'}
    ]

    let MessageData= [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: "I'm fine thank you"}
    ]

    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id} />
                <DialogItem name={DialogData[1].name} id={DialogData[1].id} />
                <DialogItem name={DialogData[2].name} id={DialogData[2].id} />
                <DialogItem name={DialogData[3].name} id={DialogData[3].id} />
                <DialogItem name={DialogData[4].name} id={DialogData[4].id} />
                <DialogItem name={DialogData[5].name} id={DialogData[5].id} />
            </div>
            <div className='messages'>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message={MessageData[2].message} />
            </div>
        </div>

    )
}

export default Dialogs;