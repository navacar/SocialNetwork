import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    
    let DialogData = [
        { id: 1, name: 'Alexandr' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Maria' },
        { id: 6, name: 'Andrew' }
    ]
    let MessageData = [
        { message: 'Hi' },
        { message: 'How are you?' },
        { message: "I'm fine thank you" }
    ]

    let DialogsElements = DialogData
        .map(Dialog => (<DialogItem name={Dialog.name} id={Dialog.id} />));

    let MessageElements = MessageData
        .map(message => <Message message={message.message} />);

    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {DialogsElements}
            </div>
            <div className='messages'>
                {MessageElements}
            </div>
        </div>

    )
}

export default Dialogs;